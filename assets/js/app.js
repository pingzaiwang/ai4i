/**
 * AI4I & AdversityBench - Academic Homepage Interactive Logic (Multilingual Support)
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initScenarioExplorer();
  initScrollSpy();
});

const UI_TEXT = {
  'zh-CN': {
    searchPlaceholder: "🔍 搜索场景名称、关键词、ID...",
    noMatch: "未找到匹配的逆境场景，请尝试更改搜索词或领域分类。",
    hiddenConstraints: "🔒 隐蔽约束",
    actionSpace: "⚡ 动作集",
    disclosurePoints: "💬 披露点",
    personaLabel: "👤 求助者处境陈述 (Persona):",
    hiddenLabel: "🔒 隐蔽可行性约束 (Hidden Constraints):",
    actionLabel: "⚡ 候选行动空间示例 (Sample Actions):",
    initialStateLabel: "⚙️ 初始环境状态机参数 (Initial State):",
    noHidden: "无特殊标注隐蔽约束",
    noActions: "标准化决策空间",
    copied: "已复制到剪贴板！",
    domainMap: {
      "housing": "住房与租住",
      "safety": "人身安全",
      "health": "医疗债务",
      "legal": "法律签证",
      "financial": "财务借贷",
      "family": "家庭照护"
    }
  },
  'en': {
    searchPlaceholder: "🔍 Search scenario, keywords, ID...",
    noMatch: "No matching scenarios found. Please adjust your search query or domain filter.",
    hiddenConstraints: "🔒 Constraints",
    actionSpace: "⚡ Actions",
    disclosurePoints: "💬 Disclosures",
    personaLabel: "👤 Scenario & Persona:",
    hiddenLabel: "🔒 Hidden Feasibility Constraints:",
    actionLabel: "⚡ Candidate Actions:",
    initialStateLabel: "⚙️ Initial State Machine Parameters:",
    noHidden: "No special hidden constraints marked",
    noActions: "Standardized decision space",
    copied: "Copied to clipboard!",
    domainMap: {
      "housing": "Housing & Eviction",
      "safety": "Physical Safety",
      "health": "Medical Debt",
      "legal": "Legal Status",
      "financial": "Debt & Finance",
      "family": "Caregiving"
    }
  },
  'ja': {
    searchPlaceholder: "🔍 シナリオ名、キーワード、IDで検索...",
    noMatch: "該当するシナリオが見つかりません。検索ワードや分野を変更してください。",
    hiddenConstraints: "🔒 隠蔽制約",
    actionSpace: "⚡ 行動空間",
    disclosurePoints: "💬 開示項目",
    personaLabel: "👤 相談者の状況記述 (Persona):",
    hiddenLabel: "🔒 隠蔽された実行制約 (Hidden Constraints):",
    actionLabel: "⚡ 候補行動の例 (Sample Actions):",
    initialStateLabel: "⚙️ 初期状態マシンパラメータ (Initial State):",
    noHidden: "特段の隠蔽制約の指定なし",
    noActions: "標準化された意思決定空間",
    copied: "クリップボードにコピーしました！",
    domainMap: {
      "housing": "住宅・立ち退き",
      "safety": "身体的安全",
      "health": "医療・債務",
      "legal": "法的地位・ビザ",
      "financial": "債務・金融",
      "family": "家族・介護"
    }
  }
};

function getLang() {
  const langAttr = document.documentElement.lang || 'zh-CN';
  if (langAttr.startsWith('en')) return 'en';
  if (langAttr.startsWith('ja')) return 'ja';
  return 'zh-CN';
}

/* ==========================================================================
   1. Theme Toggle (Light / Dark Mode)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('ai4i-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  setTheme(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(activeTheme);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ai4i-theme', theme);
  
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

/* ==========================================================================
   2. Scenario Explorer (Filter, Search & Modal)
   ========================================================================== */
function initScenarioExplorer() {
  const container = document.getElementById('scenario-list-container');
  const tabs = document.querySelectorAll('.domain-tab, .tab-btn');
  const searchInput = document.getElementById('scenario-search');
  const countBadge = document.getElementById('scenario-count-badge');
  const lang = getLang();
  const t = UI_TEXT[lang] || UI_TEXT['zh-CN'];

  if (!container || !window.ADVERSITY_SCENARIOS) return;

  let currentDomain = 'all';
  let searchQuery = '';

  function render() {
    const filtered = window.ADVERSITY_SCENARIOS.filter(s => {
      const matchDomain = currentDomain === 'all' || s.domain_id === currentDomain;
      const matchSearch = !searchQuery || 
        (s.title && s.title.toLowerCase().includes(searchQuery)) ||
        (s.persona && s.persona.toLowerCase().includes(searchQuery)) ||
        (s.id && s.id.toLowerCase().includes(searchQuery));
      return matchDomain && matchSearch;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} / ${window.ADVERSITY_SCENARIOS.length}`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 36px; text-align: center; color: var(--text-muted); background: var(--bg-card); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md);">
          ${t.noMatch}
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(s => {
      const hiddenCount = s.hidden_constraints ? s.hidden_constraints.length : 0;
      const actionsCount = s.actions_count || (s.action_samples ? s.action_samples.length : 0);
      const disCount = s.disclosures_count || (s.disclosures ? s.disclosures.length : 0);
      const displayDomain = (t.domainMap && t.domainMap[s.domain_id]) || s.domain || 'Scenario';

      return `
        <article class="scenario-card" onclick="openScenarioModal('${s.id}')">
          <div class="scenario-header">
            <span class="scenario-domain">${escapeHtml(displayDomain)}</span>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">${escapeHtml(s.id)}</span>
          </div>
          <h4 class="scenario-title">${escapeHtml(s.title || s.id)}</h4>
          <p class="scenario-preview">${escapeHtml(s.persona || '')}</p>
          <div style="display: flex; gap: 12px; margin-top: 12px; font-size: 0.76rem; color: var(--text-muted); font-family: var(--font-mono);">
            <span>${t.hiddenConstraints}: <strong>${hiddenCount}</strong></span>
            <span>${t.actionSpace}: <strong>${actionsCount}</strong></span>
            <span>${t.disclosurePoints}: <strong>${disCount}</strong></span>
          </div>
        </article>
      `;
    }).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentDomain = tab.getAttribute('data-domain') || 'all';
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      render();
    });
  }

  render();
}

window.openScenarioModal = function(id) {
  const scenario = (window.ADVERSITY_SCENARIOS || []).find(s => s.id === id);
  if (!scenario) return;

  const modal = document.getElementById('scenario-modal');
  const title = document.getElementById('modal-scenario-title');
  const body = document.getElementById('modal-scenario-body');
  const lang = getLang();
  const t = UI_TEXT[lang] || UI_TEXT['zh-CN'];

  if (!modal || !title || !body) return;

  title.textContent = `${scenario.title || scenario.id} (${scenario.id})`;
  
  const hiddenHtml = (scenario.hidden_constraints || []).map(c => 
    `<li style="margin-bottom: 6px;">${escapeHtml(c)}</li>`
  ).join('') || `<li>${t.noHidden}</li>`;

  const actionHtml = (scenario.action_samples || []).map(a => 
    `<li style="margin-bottom: 6px;">${escapeHtml(a)}</li>`
  ).join('') || `<li>${t.noActions}</li>`;

  const displayDomain = (t.domainMap && t.domainMap[scenario.domain_id]) || scenario.domain || 'Scenario';

  body.innerHTML = `
    <div style="margin-bottom: 16px;">
      <span class="brand-badge">${escapeHtml(displayDomain)}</span>
    </div>
    <div style="background: var(--bg-secondary); border-left: 3px solid var(--accent-primary); padding: 14px 18px; border-radius: var(--radius-sm); margin-bottom: 18px;">
      <strong style="color: var(--accent-primary); display: block; margin-bottom: 6px; font-size: 0.88rem;">${t.personaLabel}</strong>
      <p style="margin: 0; font-size: 0.94rem; color: var(--text-primary); line-height: 1.65;">${escapeHtml(scenario.persona || '')}</p>
    </div>

    <h4 style="color: var(--accent-primary); margin: 18px 0 8px; font-size: 0.98rem;">${t.hiddenLabel}</h4>
    <ul style="margin: 0 0 16px 20px; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
      ${hiddenHtml}
    </ul>

    <h4 style="color: var(--accent-primary); margin: 18px 0 8px; font-size: 0.98rem;">${t.actionLabel}</h4>
    <ul style="margin: 0 0 16px 20px; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
      ${actionHtml}
    </ul>

    <h4 style="color: var(--accent-primary); margin: 18px 0 8px; font-size: 0.98rem;">${t.initialStateLabel}</h4>
    <div style="background: var(--bg-secondary); padding: 12px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.82rem; overflow-x: auto; color: var(--text-primary);">
      ${escapeHtml(JSON.stringify(scenario.initial_state || {}, null, 2))}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeScenarioModal = function() {
  const modal = document.getElementById('scenario-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeScenarioModal();
  }
});

/* ==========================================================================
   3. ScrollSpy & Navigation
   ========================================================================== */
function initScrollSpy() {
  const links = document.querySelectorAll('.topbar nav a');
  const sections = document.querySelectorAll('main section[id]');

  window.addEventListener('scroll', () => {
    let top = window.scrollY;
    sections.forEach(sec => {
      let offset = sec.offsetTop - 120;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
