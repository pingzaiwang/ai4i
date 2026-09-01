// AdversityBench 102 Scenarios Dataset
window.ADVERSITY_SCENARIOS = [
  {
    "id": "caregiver_burnout_01",
    "title": "Adult child providing 70 hours/week of dementia care while employed",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "I've been caring for my dad, who has mid-stage dementia, for two years — about 70 hours a week on top of my job. My siblings live out of state. My margin after bills is maybe $150 a month. Lately my own health is slipping: chest tightness, not sleeping.",
    "hidden_constraints": [
      "Siblings have repeatedly refused to share duties or contribute money (siblings_willing=false)",
      "Cannot afford private care: aides in the area start at $800/month above current margin"
    ],
    "actions_count": 9,
    "action_samples": [
      "apply_medicaid_home_care",
      "apply_respite_care_voucher",
      "family_meeting_split_duties"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "care_hours_week": 70,
      "monthly_margin": 150,
      "siblings_willing": false,
      "parent_medicaid_eligible": true,
      "medicaid_approved": false,
      "respite_voucher_applied": false,
      "own_doctor_seen": false
    }
  },
  {
    "id": "dv_exit_planning_01",
    "title": "Person planning a safe exit from a financially controlling and abusive partner",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "I need help but I have to be careful. My partner controls all our money — I get $85 a week in cash and he checks the bank app. He's gotten scarier lately. I have two kids and I want to leave, but I need to do it safely.",
    "hidden_constraints": [
      "Partner keeps her ID and the children's documents locked away (has_id=false)",
      "Phone is on a shared plan; partner can see call logs but not this chat"
    ],
    "actions_count": 8,
    "action_samples": [
      "call_dv_hotline_when_safe",
      "open_individual_bank_account",
      "request_replacement_id"
    ],
    "disclosures_count": 1,
    "initial_state": {
      "safe_to_talk_now": true,
      "has_id": false,
      "has_own_bank_account": false,
      "funds_accessible": 85,
      "trusted_contact": true,
      "dv_advocate_contacted": false,
      "emergency_bag_ready": false
    }
  },
  {
    "id": "eviction_notice_01",
    "title": "Single parent facing an eviction hearing in 12 days",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "I'm a single mom of two, working a cash-paid cleaning job. I just got served an eviction notice — the court hearing is in 12 days. I have $340 to my name and I owe $1,450 in back rent.",
    "hidden_constraints": [
      "Paid in cash — no pay stubs or formal income documentation (has_income_docs=false)",
      "No car; the legal aid clinic is across town with no transit route (has_car=false)",
      "Estranged from family; borrowing from family is not possible (family_available=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "apply_emergency_rental_assistance",
      "request_income_letter_from_employer",
      "visit_legal_aid_clinic_downtown"
    ],
    "disclosures_count": 3,
    "initial_state": {
      "funds": 340,
      "rent_owed": 1450,
      "days_to_hearing": 12,
      "has_income_docs": false,
      "has_car": false,
      "has_smartphone": true,
      "has_lawyer": false,
      "family_available": false,
      "legal_advice": false
    }
  },
  {
    "id": "family_01",
    "title": "Mother's fall reveals dementia progression, hospital wants discharge tomorrow",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My 79-year-old mother fell at home and the hospital says she's medically cleared to discharge tomorrow, but the fall happened because her dementia has gotten a lot worse and I don't think she can be alone anymore. I live two hours away and I'm the only child. I don't know if I should move her in with me, hire someone, or what.",
    "hidden_constraints": [
      "Mother has consistently refused any in-home aide or facility placement when asked directly, even now (mother_accepts_help=false)",
      "User already used most FMLA leave earlier this year for a different medical event, so extended leave isn't available (can_take_leave=true is initial but a long stay isn't guaranteed — actually this maps to a different var)"
    ],
    "actions_count": 10,
    "action_samples": [
      "call_hospital_social_worker",
      "move_mother_in_immediately",
      "hire_home_aide"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "savings_usd": 4200,
      "days_until_discharge": 1,
      "has_poa": true,
      "sibling_available": false,
      "can_take_leave": true,
      "mother_accepts_help": false,
      "home_has_room": true,
      "car_available": true
    }
  },
  {
    "id": "family_02",
    "title": "CPS caseworker visit scheduled, home not yet safe per prior report",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "A CPS caseworker is coming to my apartment in five days for a follow-up visit after a neighbor reported that my kids (6 and 9) were home alone for a few hours while I worked a late shift. I'm terrified they'll take my kids. I want to do everything right but I don't have anyone who can watch them after school and I can't afford to lose this job.",
    "hidden_constraints": [
      "Employer already gave two written warnings for schedule changes and will fire her for another one (employer_flexible=false)",
      "She's eligible for a state childcare subsidy but the application takes 10-15 business days to process — longer than she has before the visit (eligible_for_subsidy=true but processing won't finish in time)"
    ],
    "actions_count": 9,
    "action_samples": [
      "apply_state_childcare_subsidy",
      "ask_employer_for_schedule_change",
      "enroll_free_afterschool_program"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_visit": 5,
      "savings_usd": 90,
      "has_childcare_plan": false,
      "employer_flexible": false,
      "eligible_for_subsidy": true,
      "has_lawyer": false,
      "family_nearby": false,
      "utilities_current": true
    }
  },
  {
    "id": "family_03",
    "title": "Exhausted caring for adult son with severe autism, respite waitlist is years long",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My son is 24 and has severe autism with significant support needs — he can't be left alone. I've been his full-time caregiver since my husband left three years ago and I haven't had a night off in longer than I can remember. I'm on a state respite care waitlist but nobody can tell me when a spot opens up, and I'm starting to feel like I can't keep doing this.",
    "hidden_constraints": [
      "Her son was denied for the Medicaid HCBS waiver last year on a technicality and the reapplication needs a new evaluation she hasn't scheduled (medicaid_waiver_approved=false, reapplication pending action)",
      "Her one sibling offered to help years ago but they had a falling out over their mother's estate and haven't spoken since (sibling_can_help=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "join_caregiver_support_group",
      "call_respite_hotline",
      "reapply_medicaid_waiver"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "hours_sleep_per_night": 4,
      "savings_usd": 1100,
      "on_respite_waitlist": true,
      "waitlist_years_estimate": 2,
      "medicaid_waiver_approved": false,
      "sibling_can_help": false,
      "support_group_nearby": true,
      "employer_none_relies_on_ssdi": true
    }
  },
  {
    "id": "family_04",
    "title": "Grandmother raising granddaughter with no legal custody, school won't enroll her",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My daughter is in a residential drug treatment program and asked me to take her 7-year-old, my granddaughter, while she gets clean. I've had her for two months now but the school won't enroll her without either a custody order or my daughter's signature, and my daughter's phone is confiscated at the facility so I can barely reach her. I don't want to go to court against my own daughter, but I don't know what else to do.",
    "hidden_constraints": [
      "The facility only allows scheduled phone calls once a week, and grandmother already missed this week's window (can_reach_daughter=false, next window is days away)",
      "She's technically eligible for a kinship caregiver subsidy program but it requires either a custody order or a signed caregiver authorization affidavit, which she hasn't filed (kinship_program_eligible=true but unfiled)"
    ],
    "actions_count": 9,
    "action_samples": [
      "file_caregiver_authorization_affidavit",
      "get_daughter_signature",
      "apply_kinship_subsidy"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_placement": 60,
      "has_school_enrollment": false,
      "has_poa_from_daughter": false,
      "can_reach_daughter": false,
      "savings_usd": 600,
      "daughter_supportive": true,
      "kinship_program_eligible": true,
      "car_available": true
    }
  },
  {
    "id": "family_05",
    "title": "New mother alone with newborn, frightening thoughts and no support network nearby",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "I had my first baby three weeks ago and my husband deploys again in two days for six months. I've been having really scary intrusive thoughts I've never had before, and I don't have any family in this city — we just moved here for his last posting. I'm scared of what happens when he leaves and I'm truly alone with the baby at night.",
    "hidden_constraints": [
      "She has not told her OB or anyone about the intrusive thoughts because she's afraid it will trigger a child welfare report or her husband being pulled from deployment (has_reported_symptoms=false)",
      "The on-base new-parent support program she's technically eligible for has a 3-week intake wait unless flagged urgent (on_base_support_eligible=true but intake delayed unless escalated)"
    ],
    "actions_count": 10,
    "action_samples": [
      "call_postpartum_support_helpline",
      "schedule_urgent_ob_visit",
      "request_urgent_flag_on_base_program"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_deployment": 2,
      "has_ob_appointment_soon": false,
      "family_in_city": false,
      "savings_usd": 300,
      "on_base_support_eligible": true,
      "has_reported_symptoms": false,
      "car_available": true,
      "friend_nearby": false
    }
  },
  {
    "id": "family_06",
    "title": "Siblings deadlocked over father's care as he refuses to leave his house alone",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My dad is 82, lives alone, and had a small stroke last month. My brother thinks Dad should sell the house and move to assisted living now; I think that's too fast and we should try in-home help first. We haven't agreed on anything in three weeks and Dad is still living alone with nobody checking on him most days. I'm stuck between them and don't know how to break the deadlock.",
    "hidden_constraints": [
      "Dad legally already named the user (not the brother) as his healthcare and financial power of attorney, which the brother doesn't know and will likely be angry about (poa_designated_person=user, undisclosed)",
      "The brother controls a joint account with some of dad's savings and has been slow to release funds for anything he didn't personally approve (savings access partially gated by brother_agrees)"
    ],
    "actions_count": 9,
    "action_samples": [
      "start_in_home_aide_trial",
      "release_joint_funds_for_aide",
      "pay_out_of_pocket_for_aide"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_stroke": 30,
      "savings_shared_usd": 15000,
      "brother_agrees": false,
      "dad_has_capacity": true,
      "poa_designated_person": "user",
      "home_health_available_area": true,
      "dad_open_to_aide": true,
      "days_dad_unsupervised_daily": 20
    }
  },
  {
    "id": "family_07",
    "title": "Husband's oncologist recommends hospice, wife unsure how to tell the kids",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My husband's oncologist told us yesterday that further chemo isn't going to help anymore and recommended we start talking about hospice. He's 58. Our kids are 14 and 17 and don't know yet. I don't know how to even begin this conversation with them, or honestly how I'm supposed to keep functioning at my job while all this happens.",
    "hidden_constraints": [
      "Her employer's bereavement policy only covers 3 days AFTER a death, not for the caregiving/transition period beforehand, which she hasn't checked (employer_bereavement_days applies post-death only)",
      "Her extended family lives out of state and the one relative who offered to help has a chronic illness that limits how much they can actually do (extended_family_nearby=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "schedule_hospice_intake",
      "use_bereavement_days_now",
      "apply_fmla_leave"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_hospice_talk": 1,
      "kids_informed": false,
      "employer_bereavement_days": 3,
      "savings_usd": 2500,
      "fmla_available": true,
      "hospice_intake_scheduled": false,
      "extended_family_nearby": false,
      "kids_have_counselor_access": true
    }
  },
  {
    "id": "family_08",
    "title": "Grandfather raising two grandkids after daughter's overdose, running out of money",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My daughter died of an overdose four months ago and I've had my two grandkids, ages 4 and 11, ever since. Nobody official placed them with me, their dad isn't in the picture, and I'm 67 and living on a fixed Social Security income. I'm three weeks from not being able to pay rent with three of us in a one-bedroom, and I don't know how the system is supposed to work for someone in my position.",
    "hidden_constraints": [
      "No car and the nearest kinship navigator office that could help him apply for benefits is across town on a bus route that doesn't run on the days he'd need to go (car_available=false)",
      "Because there's no court order or CPS case, he doesn't automatically qualify for foster-kinship stipends — he needs a separate 'informal kinship' subsidy application that most people don't know exists (kinship_subsidy_applied=false, non-obvious program)"
    ],
    "actions_count": 10,
    "action_samples": [
      "apply_informal_kinship_subsidy",
      "visit_navigator_office_in_person",
      "apply_snap_and_tanf"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "savings_usd": 150,
      "weeks_until_rent_shortfall": 3,
      "has_legal_guardianship": false,
      "kinship_subsidy_applied": false,
      "housing_larger_unit_available": true,
      "social_worker_assigned": false,
      "grandkids_school_enrolled": true,
      "car_available": false
    }
  },
  {
    "id": "family_09",
    "title": "Caring for husband with progressing MS while working full time, marriage strained",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My husband's multiple sclerosis has progressed a lot this year and he now needs help with most daily tasks. I still work full time because we need my health insurance, and by the time I get home I have nothing left to give him or myself. We've started fighting about things that aren't really about the fights, and I'm scared we're both drowning.",
    "hidden_constraints": [
      "Her employer's remote work policy was quietly revoked for her role six months ago after a management change, though it's still listed on the website (employer_remote_flexible=false, outdated public info)",
      "Her husband is eligible to file for SSDI given his MS progression but he's refused to apply because he sees it as 'giving up,' and she hasn't pushed the conversation (disability_benefits_filed=false, husband resistance)"
    ],
    "actions_count": 10,
    "action_samples": [
      "request_remote_work_arrangement",
      "hire_home_health_aide_hours",
      "file_ltd_claim"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "savings_usd": 3000,
      "hours_worked_per_week": 45,
      "employer_remote_flexible": false,
      "ltd_insurance_active": true,
      "home_health_aide_hours_week": 0,
      "marriage_counseling_used": false,
      "disability_benefits_filed": false,
      "car_available": true
    }
  },
  {
    "id": "family_10",
    "title": "Working a reunification case plan after CPS removed kids following a relapse",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "CPS removed my two kids three months ago after I relapsed on pills, and they're staying with my sister now. I've been sober since, going to meetings, and I have a case plan with a list of things I'm supposed to complete before the next hearing in six weeks. I'm trying so hard to do everything right but some of the requirements conflict with each other on scheduling and I'm worried I'll run out of time.",
    "hidden_constraints": [
      "Her outpatient program's schedule (three daytime sessions a week) directly conflicts with the only job she's been offered, which needs those exact hours, and she hasn't told her caseworker about the conflict (outpatient_program_completed=false, blocked by job conflict)",
      "Her sister, who has the kids now, has privately told her she's getting overwhelmed and doesn't know how much longer she can keep doing supervised visitation logistics on top of full custody (sister_supportive=true currently but strained, undisclosed)"
    ],
    "actions_count": 10,
    "action_samples": [
      "attend_outpatient_sessions",
      "take_job_offer",
      "ask_caseworker_to_adjust_plan"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "weeks_until_hearing": 6,
      "savings_usd": 400,
      "outpatient_program_completed": false,
      "housing_stable": false,
      "job_secured": false,
      "sister_supportive": true,
      "visitation_supervised_only": true,
      "sponsor_assigned": true
    }
  },
  {
    "id": "family_11",
    "title": "Partner left two weeks after birth, new mother has no nearby support and is falling apart",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My partner walked out two weeks after our daughter was born and moved back to his home state. I have a six-week-old, no family in this city, and I'm barely sleeping. I'm not thinking about hurting anyone, but I'm crying most of the day and I genuinely don't know how I'm going to function once my maternity leave runs out in four weeks.",
    "hidden_constraints": [
      "The extended leave her employer technically offers is unpaid and she can't afford more than two additional weeks without help (employer_extended_leave_option=true but financially limited)",
      "She has one coworker friend who offered to help but that friend is on a work visa with unpredictable hours and can't commit to a regular schedule (friend_network_local=false, unreliable)"
    ],
    "actions_count": 9,
    "action_samples": [
      "screen_for_ppd",
      "request_extended_unpaid_leave",
      "apply_state_paid_family_leave"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "weeks_maternity_leave_left": 4,
      "savings_usd": 800,
      "family_in_city": false,
      "screened_for_ppd": false,
      "employer_extended_leave_option": true,
      "childcare_secured": false,
      "friend_network_local": false,
      "car_available": true
    }
  },
  {
    "id": "family_12",
    "title": "Three siblings can't agree on splitting care duties for mother's cancer treatment",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "Our mom was just diagnosed with stage 3 cancer and starts chemo next week. I'm the only one of us three kids who lives in the same city as her; my brother is out of state and says he'll help pay for things, and my sister keeps saying she'll 'figure out her schedule' but hasn't committed to anything concrete. I'm already stretched between my job and my own two kids, and I'm supposed to be the one driving Mom to chemo starting Monday.",
    "hidden_constraints": [
      "The brother's offer to help pay is vague and he hasn't actually transferred any money or set a concrete monthly amount despite saying it for two weeks (brother_financial_commit=false)",
      "The sister privately told mom (not the user) that she's dealing with her own health scare and can't commit to driving duties, but asked mom not to tell the user yet (sister_time_commit=false, concealed reason)"
    ],
    "actions_count": 11,
    "action_samples": [
      "use_medical_transport_service",
      "use_pto_for_first_appointments",
      "request_written_financial_commitment"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_chemo_starts": 6,
      "savings_usd": 1800,
      "brother_financial_commit": false,
      "sister_time_commit": false,
      "employer_flexible_hours": true,
      "medical_transport_available": true,
      "user_pto_days": 5,
      "car_available": true
    }
  },
  {
    "id": "family_13",
    "title": "Father with early dementia refuses to stop driving after a near-miss accident",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My dad had a close call last week where he almost hit a cyclist, and his doctor mentioned mild cognitive decline at his last checkup. He still insists on driving to church and the grocery store and gets furious whenever I bring up giving up his keys. I'm scared he's going to hurt himself or someone else, but I also don't want to blow up our relationship over this.",
    "hidden_constraints": [
      "Dad's doctor already privately told the user she's reluctant to file a formal driving-fitness report because dad is a longtime patient and she's worried about damaging trust (state_allows_physician_report=true but doctor hesitant, needs explicit ask)",
      "The user's own name is not on dad's car title or insurance, so she cannot unilaterally sell or restrict access to the vehicle without dad's cooperation (car_registered_to_dad=true, blocks unilateral vehicle actions)"
    ],
    "actions_count": 9,
    "action_samples": [
      "set_up_rideshare_grocery_run",
      "ask_doctor_for_driving_evaluation",
      "request_dmv_reevaluation"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_near_miss": 7,
      "dad_license_valid": true,
      "dad_agrees_to_stop": false,
      "state_allows_physician_report": true,
      "alternate_transport_setup": false,
      "savings_usd": 900,
      "dad_lives_alone": true,
      "car_registered_to_dad": true
    }
  },
  {
    "id": "family_14",
    "title": "Mother in late-stage dementia enters hospice, brother disputes the decision from afar",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My mom has advanced dementia and stopped eating regularly over the past two weeks. Her doctor thinks it's time to bring in hospice care, and I agree, but my brother who lives across the country keeps calling and saying we're 'giving up on her' and that we should keep pushing for more aggressive treatment. I'm her primary caregiver and I have her medical power of attorney, but I don't want to make this decision estranged from my only sibling.",
    "hidden_constraints": [
      "Mom's advance directive, signed years ago while she had capacity, explicitly states she did not want aggressive life-prolonging treatment in a scenario like this — the user has this document but hasn't shown it to the brother yet (advance_directive_exists=true, unshared)",
      "The brother is not actually available to visit and see mom's condition firsthand for another five weeks due to his own work situation, which he hasn't admitted directly (brother_visiting_soon=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "start_hospice_intake",
      "share_advance_directive_with_brother",
      "arrange_video_call_with_doctor_and_brother"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_appetite_decline": 14,
      "has_medical_poa": true,
      "brother_agrees_hospice": false,
      "hospice_intake_available": true,
      "advance_directive_exists": true,
      "savings_usd": 1200,
      "in_home_hospice_possible": true,
      "brother_visiting_soon": false
    }
  },
  {
    "id": "family_15",
    "title": "Aunt taking in teenage niece after a violent incident at home, unsure of her legal footing",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My 15-year-old niece showed up at my door two nights ago saying she can't go back to her dad's house after things got physical between them. I've let her stay, but I have no legal standing here, her dad hasn't been told where she is, and I'm worried about what happens when the school notices she's not showing up and starts asking questions. I want to protect her without making things legally worse for either of us.",
    "hidden_constraints": [
      "Not disclosing to CPS quickly could itself be treated as harboring a runaway in some jurisdictions, but the aunt doesn't know this and is instead avoiding CPS out of fear they'll simply return the niece to the dad (cps_report_filed=false, legal exposure unknown to her)",
      "The niece has photos of bruising on her phone from two nights ago that could support an emergency protective order, but she's scared to share them and hasn't yet (evidence exists but ungated in state, tied to niece_willing_to_talk_to_cps requiring trust-building first)"
    ],
    "actions_count": 9,
    "action_samples": [
      "call_legal_aid_family_law",
      "file_cps_report_proactively",
      "document_niece_account_and_evidence"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_arrival": 2,
      "has_any_legal_authority": false,
      "school_contacted": false,
      "cps_report_filed": false,
      "savings_usd": 500,
      "niece_willing_to_talk_to_cps": true,
      "dad_knows_location": false,
      "legal_aid_available": true
    }
  },
  {
    "id": "family_16",
    "title": "Mother of premature twins splitting time between NICU and toddler at home, unraveling",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "My twins were born eight weeks early and are still in the NICU three weeks later. I have a two-year-old at home too, and I'm splitting every day between the hospital and home with basically no help — my husband works nights to keep our insurance and my parents live overseas. I'm not sleeping, I forgot to eat yesterday until 8pm, and I don't see how this gets better before the twins come home.",
    "hidden_constraints": [
      "Husband's night-shift job is the only one of theirs providing health insurance, and switching to days would mean losing coverage during the exact period they most need it (husband_schedule_flexible=false, insurance-locked)",
      "She hasn't been screened for postpartum depression/anxiety because she assumed the NICU stress was 'just circumstantial' and didn't think to mention her mood to anyone yet (postpartum_screening_done=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "enroll_toddler_emergency_daycare",
      "use_nicu_family_room",
      "ask_husband_to_switch_shift"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_twins_in_nicu": 21,
      "savings_usd": 1600,
      "toddler_childcare_secured": false,
      "husband_schedule_flexible": false,
      "nicu_family_room_available": true,
      "meal_support_setup": false,
      "postpartum_screening_done": false,
      "car_available": true
    }
  },
  {
    "id": "financial_01",
    "title": "Wage theft from a restaurant closing without final paychecks",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "I worked as a line cook at a restaurant that just closed overnight without warning. They owe me three weeks of wages, about $1,800, and I have $60 in my checking account. Rent is due in 9 days.",
    "hidden_constraints": [
      "Was paid partly under the table with no pay stubs for the last month (has_pay_stubs=false)",
      "Owner's phone is disconnected and the restaurant's social media is deleted (employer_reachable=false)",
      "Doesn't have contact info for any coworkers to corroborate hours worked (has_coworker_contacts=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "file_state_labor_board_claim",
      "call_employer_directly",
      "gather_bank_records"
    ],
    "disclosures_count": 3,
    "initial_state": {
      "wages_owed": 1800,
      "funds": 60,
      "days_to_rent": 9,
      "has_pay_stubs": false,
      "has_bank_account": true,
      "employer_reachable": false,
      "filed_wage_claim": false,
      "has_coworker_contacts": false
    }
  },
  {
    "id": "financial_02",
    "title": "SNAP benefits wrongfully terminated after a caseworker error",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "My SNAP food benefits got cut off this week — the county says I didn't submit a recertification form, but I mailed it three weeks ago. I have two kids and $85 left for groceries this month.",
    "hidden_constraints": [
      "Mailed the form via regular mail with no tracking or certified receipt (has_mailing_proof=false)",
      "No internet access at home and library computer time is limited (can_access_online_portal=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "request_expedited_appeal_hearing",
      "submit_proof_of_mailing",
      "resubmit_recert_online"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "funds": 85,
      "days_until_next_grocery_run": 4,
      "has_mailing_proof": false,
      "has_case_number": true,
      "can_access_online_portal": false,
      "filed_appeal": false,
      "has_transportation": true
    }
  },
  {
    "id": "financial_03",
    "title": "Unemployment claim denied after misclassified 'quit'",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "I got laid off two weeks ago but my unemployment claim was denied because the employer told the state I quit voluntarily. That's a lie, they eliminated my position. I have $210 left and a car payment due in 6 days.",
    "hidden_constraints": [
      "Was let go verbally with no termination letter or written notice (has_termination_letter=false)",
      "No coworker willing to testify against the employer out of fear of retaliation (has_witness=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "appeal_with_termination_letter",
      "appeal_with_witness_statement",
      "file_appeal_with_written_timeline"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "funds": 210,
      "days_to_car_payment": 6,
      "has_termination_letter": false,
      "has_witness": false,
      "filed_appeal": false,
      "has_email_access": true,
      "car_repo_risk": false
    }
  },
  {
    "id": "financial_04",
    "title": "Aggressive debt collector calling work and threatening arrest",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "A debt collector has been calling me ten times a day, including at my job, and yesterday they said I could be arrested if I don't pay $2,400 by Friday. I know that's not really how debt works but I'm panicking and my manager already asked me to stop taking calls at work.",
    "hidden_constraints": [
      "Never received a written debt validation notice, only phone calls (has_debt_validation_letter=false)",
      "Job is genuinely at risk because supervisor has already given one warning about personal calls (job_at_risk=true)"
    ],
    "actions_count": 10,
    "action_samples": [
      "demand_written_validation",
      "verify_debt_is_owed",
      "send_cease_contact_at_work_letter"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "debt_amount": 2400,
      "days_until_threat_deadline": 4,
      "funds": 150,
      "has_debt_validation_letter": false,
      "has_call_log": true,
      "job_at_risk": true,
      "sent_cease_contact": false
    }
  },
  {
    "id": "financial_05",
    "title": "Navigating medical bankruptcy after a surprise $40,000 hospital bill",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "I had emergency surgery in April and just got hit with a $40,000 bill my insurance won't cover, they say it was 'out of network' even though the hospital was in-network. Collections has started calling and I'm considering bankruptcy. I have $900 saved and make $2,800 a month.",
    "hidden_constraints": [
      "Never received the itemized Explanation of Benefits from the insurer to dispute the claim (has_eob_documents=false)",
      "Doesn't know the No Surprises Act may apply to the out-of-network billing error (has_no_surprises_act_case=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "dispute_insurance_denial",
      "request_eob_from_insurer",
      "file_no_surprises_act_complaint"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "debt_amount": 40000,
      "funds": 900,
      "monthly_income": 2800,
      "has_eob_documents": false,
      "has_no_surprises_act_case": false,
      "filed_bankruptcy": false,
      "has_credit_counseling_cert": false
    }
  },
  {
    "id": "financial_06",
    "title": "Trapped in a payday loan rollover cycle",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "I took out a $400 payday loan four months ago and I've been rolling it over every two weeks. I now owe $1,150 in fees and principal, and they debit my account automatically the day I get paid, leaving nothing for bills. I need this to stop.",
    "hidden_constraints": [
      "Doesn't know she can legally revoke the lender's ACH auto-debit authorization in writing (has_revoked_ach_authorization=false)",
      "Only has the one bank account the lender already drains, no separate account to redirect pay into (has_alternative_bank_account=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "revoke_ach_authorization",
      "reroute_paycheck_new_account",
      "open_new_bank_account"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "loan_balance": 1150,
      "funds": 40,
      "days_until_next_debit": 3,
      "has_revoked_ach_authorization": false,
      "has_alternative_bank_account": false,
      "knows_state_lending_cap": false,
      "filed_complaint": false
    }
  },
  {
    "id": "financial_07",
    "title": "Sudden layoff with no severance after eight years",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "I got laid off yesterday after eight years at the same company, effective immediately, no severance, no warning. I have $3,200 in savings and my COBRA notice says health insurance is $640/month if I want to keep it. My mortgage-equivalent rent is $1,400.",
    "hidden_constraints": [
      "Signed the layoff paperwork already without negotiating anything (has_negotiated_severance=false)",
      "Manager left the company two weeks ago, so there's no one who can quickly write a reference letter (has_reference_letter=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "negotiate_severance_before_signing",
      "request_reference_letter",
      "file_unemployment_claim"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "funds": 3200,
      "monthly_rent": 1400,
      "cobra_cost": 640,
      "has_severance": false,
      "has_negotiated_severance": false,
      "has_reference_letter": false,
      "eligible_for_unemployment": true,
      "has_resume_updated": false
    }
  },
  {
    "id": "financial_08",
    "title": "Rideshare account deactivated, gig income collapses overnight",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "My rideshare driver account got deactivated this morning over a rider complaint I don't even understand, no warning, no chance to respond first. That was basically 100% of my income, about $900 a month. I have $310 saved and a car payment due in 5 days.",
    "hidden_constraints": [
      "The deactivation email gave no specific reason, just a generic policy violation notice (has_deactivation_reason=false)",
      "Never downloaded a backup export of trip history and ratings before losing app access (has_trip_history_export=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "appeal_with_specific_reason",
      "request_deactivation_reason",
      "export_trip_history"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "funds": 310,
      "days_to_car_payment": 5,
      "has_deactivation_reason": false,
      "has_trip_history_export": false,
      "signed_up_second_platform": false,
      "filed_appeal": false
    }
  },
  {
    "id": "financial_09",
    "title": "Identity theft opens fraudulent credit lines and drains a bank account",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "Someone stole my identity and opened two credit cards and drained $1,900 from my checking account through fraudulent transfers. My bank hasn't restored the money yet and rent is due in 8 days. I have $45 left in a separate savings account.",
    "hidden_constraints": [
      "Hasn't filed a police report yet, assumed it wouldn't matter since it's online fraud (has_police_report=false)",
      "Doesn't know the FTC's identitytheft.gov report is required by the bank to expedite reimbursement (has_ftc_identity_theft_report=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "file_police_report",
      "file_ftc_identity_theft_report",
      "submit_bank_fraud_affidavit"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "funds": 45,
      "stolen_amount": 1900,
      "days_to_rent": 8,
      "has_police_report": false,
      "has_ftc_identity_theft_report": false,
      "has_fraud_affidavit": false,
      "bank_reimbursement_pending": true
    }
  },
  {
    "id": "financial_10",
    "title": "Wages garnished by mistake for a debt that was already paid off",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "My paycheck came in $610 short this week because of a wage garnishment for an old credit card debt, but I paid that debt off two years ago through a settlement. My rent and utilities are due in 6 days and I can't cover them without that money.",
    "hidden_constraints": [
      "The settlement letter from two years ago was in an old email account she can no longer log into (has_settlement_proof=false)",
      "HR at her new job is a small three-person office overwhelmed with other issues and slow to respond to garnishment questions (employer_hr_responsive=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "file_motion_to_stop_garnishment",
      "recover_old_email_account",
      "request_settlement_copy_from_collector"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "funds": 120,
      "garnished_amount": 610,
      "days_to_bills": 6,
      "has_settlement_proof": false,
      "has_pay_stub_showing_garnishment": true,
      "employer_hr_responsive": false,
      "filed_motion_to_stop": false
    }
  },
  {
    "id": "financial_11",
    "title": "Employer's 401(k) contributions never actually deposited before bankruptcy",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "I just found out the company I worked for filed for bankruptcy, and it turns out they never actually deposited three years of my 401(k) contributions, about $9,000, into my retirement account. They just took it out of my paychecks and kept it. I don't know if I'll ever see that money.",
    "hidden_constraints": [
      "Threw away paper pay stubs years ago and payroll's online portal was shut down after the bankruptcy filing (has_pay_stub_history=false)",
      "Doesn't know who the third-party plan administrator is or how to contact them, only ever dealt with HR (has_plan_administrator_contact=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "file_dol_ebsa_complaint",
      "submit_pay_stub_evidence_to_dol",
      "reconstruct_pay_records_via_bank"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "missing_contributions": 9000,
      "funds": 700,
      "has_pay_stub_history": false,
      "has_plan_administrator_contact": false,
      "filed_dol_complaint": false,
      "days_until_bankruptcy_claims_deadline": 30
    }
  },
  {
    "id": "financial_12",
    "title": "Disability benefits denied despite a documented chronic condition",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "I applied for Social Security disability after my chronic back condition made it impossible to keep working construction, and I just got denied. The letter says 'insufficient medical evidence.' I have $260 to my name and my part-time savings are running out fast.",
    "hidden_constraints": [
      "Medical records are scattered across three different clinics that never shared files with each other (has_complete_medical_records=false)",
      "No doctor has ever completed a formal functional capacity assessment describing specific work limitations (has_doctor_functional_assessment=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "file_reconsideration_with_full_records",
      "request_records_from_all_clinics",
      "schedule_functional_capacity_exam"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "funds": 260,
      "days_of_savings_left": 20,
      "has_complete_medical_records": false,
      "has_doctor_functional_assessment": false,
      "filed_reconsideration": false,
      "has_disability_attorney": false
    }
  },
  {
    "id": "financial_13",
    "title": "Unemployment office demands repayment of an overpayment that wasn't the claimant's fault",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "The state unemployment office just sent me a letter saying they overpaid me $3,600 over the past year due to a processing error on their end, and now they want it back in 30 days or they'll start garnishing my new paycheck. I make $2,600 a month and have $400 saved.",
    "hidden_constraints": [
      "Doesn't know that overpayments caused by agency error (not fraud) often qualify for a waiver of repayment (has_waiver_eligibility_info=false)",
      "Deleted the old benefits payment confirmation emails months ago, no clean record of what was actually received (has_payment_history_records=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "request_waiver_of_overpayment",
      "learn_about_waiver_eligibility",
      "reconstruct_payment_history"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "overpayment_amount": 3600,
      "funds": 400,
      "monthly_income": 2600,
      "days_until_garnishment": 30,
      "has_waiver_eligibility_info": false,
      "has_payment_history_records": false,
      "filed_waiver_request": false
    }
  },
  {
    "id": "financial_14",
    "title": "Bank freezes checking account over a fraud flag, cutting off all access to funds",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "My bank froze my checking account two days ago after flagging a large deposit as suspicious, it was actually a legitimate freelance payment. I have $2,100 stuck in there and no access to it. My phone bill and car insurance are both due in 4 days and I only have $15 in cash.",
    "hidden_constraints": [
      "Never sent the client a formal invoice, the payment was arranged informally over text (has_invoice_proof=false)",
      "Lost the client's phone number when the phone was replaced last month (has_client_contact_confirmation=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "submit_invoice_to_bank",
      "create_retroactive_invoice",
      "get_client_written_confirmation"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "frozen_funds": 2100,
      "cash_on_hand": 15,
      "days_to_bills": 4,
      "has_invoice_proof": false,
      "has_client_contact_confirmation": false,
      "case_escalated": false,
      "has_second_bank_account": false
    }
  },
  {
    "id": "financial_15",
    "title": "Defaulted student loan triggers wage garnishment and tax refund seizure",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "I fell behind on my federal student loans years ago after a rough stretch, and now they've started garnishing 15% of my paycheck and just seized my tax refund too. I need this to stop, I'm barely covering groceries as it is. I make $2,400 a month.",
    "hidden_constraints": [
      "Doesn't know she can request an administrative wage garnishment hearing to prove financial hardship (knows_hardship_hearing_rights=false)",
      "Never gathered the income documentation needed to apply for an income-driven repayment plan (has_income_driven_repayment_paperwork=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "request_hardship_hearing",
      "learn_about_hardship_hearing_rights",
      "gather_income_docs_for_idr"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "monthly_income": 2400,
      "garnishment_percent": 15,
      "seized_refund": 1100,
      "funds": 90,
      "has_income_driven_repayment_paperwork": false,
      "knows_hardship_hearing_rights": false,
      "rehab_agreement_signed": false
    }
  },
  {
    "id": "financial_16",
    "title": "Freelance client ghosts on a $5,000 invoice, threatening a cascading business collapse",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "A client I did $5,000 of web design work for three months ago has stopped responding to every email and call. I'm a solo freelancer and that invoice was supposed to cover my quarterly taxes and next month's business expenses. I have $600 left in my business account.",
    "hidden_constraints": [
      "The project scope was agreed over email and a phone call, never a formally signed contract (has_signed_contract=false)",
      "Never kept dated screenshots or delivery confirmations proving the work was completed and sent to the client (has_delivered_work_proof=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "file_small_claims_with_contract",
      "reconstruct_contract_from_emails",
      "gather_delivery_proof"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "invoice_amount": 5000,
      "business_funds": 600,
      "days_to_tax_deadline": 15,
      "has_signed_contract": false,
      "has_delivered_work_proof": false,
      "sent_demand_letter": false,
      "filed_small_claims": false
    }
  },
  {
    "id": "health_01",
    "title": "Insulin gap after pharmacy denial",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "I have type 1 diabetes and my pharmacy just told me my insurance won't cover my insulin refill until next month because I filled 3 days 'too early.' I have about a day and a half of insulin left. I don't know what to do.",
    "hidden_constraints": [
      "Her prescribing endocrinologist is on vacation for two weeks and the covering doctor won't renew controlled-refill overrides without a visit (prescriber_reachable=True but covering doctor requires new appointment; represented via appointment_required flag)",
      "She was already denied once for manufacturer patient-assistance for being 'over income' by a small margin last year (manufacturer_assistance_enrolled=False, prior_denial=True)"
    ],
    "actions_count": 9,
    "action_samples": [
      "call_pharmacy_override",
      "call_manufacturer_urgent_program",
      "apply_manufacturer_assistance"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_of_insulin_left": 1.5,
      "cash_on_hand": 40,
      "has_car": true,
      "manufacturer_assistance_enrolled": false,
      "id_document_available": true,
      "prescriber_reachable": true,
      "distress_level": 6,
      "appointment_required": true,
      "prior_denial": true
    }
  },
  {
    "id": "health_02",
    "title": "No inpatient psychiatric beds for suicidal teenager",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "My 15-year-old told me tonight that she has a plan to hurt herself. We went to the ER and they said she needs inpatient psychiatric care but there are no adolescent beds anywhere in the state right now. I'm terrified to bring her home.",
    "hidden_constraints": [
      "There is a working parent's firearm in a safe at home that hasn't been mentioned yet (means_secured_at_home=False, firearm_in_home=True)",
      "The other parent lives two states away and can't help watch the child overnight for at least two days (second_parent_present=False, out_of_state=True)"
    ],
    "actions_count": 9,
    "action_samples": [
      "ask_er_for_crisis_stabilization_unit",
      "ask_about_out_of_state_bed",
      "call_988_for_safety_plan"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "child_currently_at_er": true,
      "has_car": true,
      "insurance_active": true,
      "second_parent_present": false,
      "cash_on_hand": 60,
      "distress_level": 9,
      "means_secured_at_home": false,
      "firearm_in_home": true,
      "out_of_state": true
    }
  },
  {
    "id": "health_03",
    "title": "Workplace denies wheelchair accessibility accommodation",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "I use a wheelchair after a spinal injury last year and my company just moved our team to a floor with no working elevator access from the parking garage. HR says 'facilities is looking into it' but it's been three weeks and I'm using sick days I don't have to spare.",
    "hidden_constraints": [
      "Her manager privately told a coworker she's 'more trouble than she's worth,' which she hasn't mentioned, and she fears retaliation if she files a formal complaint (retaliation_fear=True)",
      "She's not actually eligible for full remote work per her contract without a formal accommodation approval first, so working from home right now could be seen as unauthorized absence (remote_work_possible=True but requires_formal_approval=True)"
    ],
    "actions_count": 10,
    "action_samples": [
      "file_formal_ada_request",
      "request_temp_remote_approval",
      "work_remote_without_approval"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "sick_days_remaining": 2,
      "salary_biweekly": 1800,
      "hr_ticket_open": true,
      "ada_coordinator_contacted": false,
      "remote_work_possible": true,
      "union_member": false,
      "distress_level": 5,
      "requires_formal_approval": true,
      "retaliation_fear": true
    }
  },
  {
    "id": "health_04",
    "title": "Biologic infusion treatment interrupted after job loss",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "I have Crohn's disease and get an infusion every 8 weeks that keeps me out of the hospital. I was laid off two weeks ago and my COBRA quote is $740/month, way more than I can afford. My next infusion is due in 10 days.",
    "hidden_constraints": [
      "She has a pending job offer starting in 3 weeks with insurance that has a 60-day waiting period before coverage begins, which she hasn't mentioned (new_job_pending=True, new_insurance_wait_days=60)",
      "The infusion center requires proof of active insurance or a signed self-pay agreement before they'll schedule, and self-pay cost for one infusion is $9,000 (self_pay_infusion_cost=9000)"
    ],
    "actions_count": 9,
    "action_samples": [
      "call_infusion_center_billing",
      "apply_manufacturer_copay_assistance",
      "enroll_marketplace_special_enrollment"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_next_infusion_due": 10,
      "cash_on_hand": 300,
      "cobra_monthly_cost": 740,
      "cobra_elected": false,
      "manufacturer_copay_program_checked": false,
      "state_marketplace_enrolled": false,
      "flare_risk_level": 4,
      "new_job_pending": true,
      "new_insurance_wait_days": 60,
      "self_pay_infusion_cost": 9000
    }
  },
  {
    "id": "health_05",
    "title": "Prior authorization denied for herniated disc surgery",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "I've had a herniated disc for four months and can barely walk some days. My surgeon submitted a prior authorization for the microdiscectomy and my insurer denied it, saying I haven't 'completed enough conservative treatment' even though I've done physical therapy and injections. I'm on unpaid leave from work.",
    "hidden_constraints": [
      "The denial letter cites needing a specific type of injection (facet block) that she never had, only epidurals, which she didn't realize was a different requirement (missing_facet_block=True)",
      "Her short-term disability claim was also denied pending the appeal outcome, so she has no income at all right now, which she hasn't said outright (std_denied=True)"
    ],
    "actions_count": 9,
    "action_samples": [
      "request_denial_letter_detail",
      "file_formal_appeal",
      "request_peer_to_peer_review"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_on_unpaid_leave": 12,
      "pt_sessions_completed": 18,
      "epidural_injections_completed": 2,
      "appeal_filed": false,
      "peer_to_peer_requested": false,
      "savings_remaining": 1500,
      "pain_level": 7,
      "missing_facet_block": true,
      "std_denied": true
    }
  },
  {
    "id": "health_06",
    "title": "Uninsured child needs asthma specialist after ER visit",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "My 7-year-old had a bad asthma attack last week and we went to the ER. They said he needs to see a pulmonologist within two weeks, but we don't have insurance right now — I lost my job and haven't been able to get him on Medicaid yet. I don't know how we're going to pay for a specialist.",
    "hidden_constraints": [
      "No car and the nearest pulmonologist accepting sliding-scale patients is 40 minutes away with no direct bus route (has_car=False, no_direct_transit=True)",
      "Medicaid application was already started once and stalled because a required pay stub from the old job couldn't be located (medicaid_application_submitted=False, missing_paystub=True)"
    ],
    "actions_count": 10,
    "action_samples": [
      "submit_medicaid_chip_application",
      "request_paystub_alternative_docs",
      "call_chip_presumptive_eligibility"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_er_visit": 3,
      "medicaid_application_submitted": false,
      "chip_eligible_likely": true,
      "cash_on_hand": 150,
      "rescue_inhaler_refills_left": 1,
      "has_car": false,
      "symptom_severity": 5,
      "missing_paystub": true,
      "no_direct_transit": true
    }
  },
  {
    "id": "health_07",
    "title": "Postpartum complication needs surgery, no paid leave left",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "I had a C-section five weeks ago and now I have an infection at the incision site that my OB says needs a minor surgical procedure to drain and repair. My paid maternity leave ran out last week and my job is asking when I'm coming back. I have a newborn and don't know how I can take more time off.",
    "hidden_constraints": [
      "Her employer has fewer than 50 employees so FMLA doesn't actually apply, which she assumed it did (fmla_job_protected=True stated but actual_fmla_eligible=False)",
      "Her partner's job would allow unpaid leave but he hasn't asked because he's afraid of losing overtime shifts they depend on financially (partner_can_take_time_off=False, partner_afraid_to_ask=True)"
    ],
    "actions_count": 10,
    "action_samples": [
      "verify_fmla_eligibility",
      "apply_short_term_disability_retroactive",
      "request_state_paid_family_leave"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "paid_leave_days_remaining": 0,
      "fmla_job_protected": true,
      "short_term_disability_active": false,
      "partner_can_take_time_off": false,
      "infection_severity": 6,
      "childcare_arranged": false,
      "actual_fmla_eligible": false,
      "partner_afraid_to_ask": true
    }
  },
  {
    "id": "health_08",
    "title": "Coordinating hospice care for a dying parent amid family conflict",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "My mom has terminal pancreatic cancer and her oncologist says it's time to consider hospice, but my brother refuses to accept it and keeps pushing for another round of chemo. I'm the one who's been managing her care and I don't know how to move forward with himfighting me on it.",
    "hidden_constraints": [
      "Her mother privately told her weeks ago that she doesn't want more chemo but hasn't said this to the brother directly, and no one has put it in writing (mother_has_capacity=True, mother_wishes_documented=False)",
      "The brother, unstated, is the one legally listed as healthcare power of attorney from an old document, not her (poa_holder_is_sibling=True)"
    ],
    "actions_count": 9,
    "action_samples": [
      "schedule_hospice_evaluation",
      "document_mothers_wishes_with_provider",
      "complete_advance_directive"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "mother_has_capacity": true,
      "advance_directive_exists": false,
      "hospice_eval_scheduled": false,
      "days_estimated_remaining": 60,
      "sibling_agreement": false,
      "caregiver_burnout_level": 7,
      "mother_wishes_documented": false,
      "poa_holder_is_sibling": true
    }
  },
  {
    "id": "health_09",
    "title": "Transportation barrier threatens dialysis schedule",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "I'm on dialysis three times a week and my car broke down for good this week. Missing a session isn't really optional for me, but I don't have $600 for repairs and the clinic is 25 minutes away with no bus that gets me there in time for my morning slot.",
    "hidden_constraints": [
      "He's eligible for Medicaid non-emergency medical transport (NEMT) but has never enrolled because the last time he tried the phone line hung up on him after an hour (nemt_enrolled=False, prior_nemt_frustration=True)",
      "His sister lives nearby but they had a falling out six months ago and haven't spoken since, which he hasn't mentioned as a possible ride source (family_nearby=False, estranged_sister_nearby=True)"
    ],
    "actions_count": 9,
    "action_samples": [
      "enroll_medicaid_nemt",
      "ask_clinic_social_worker_for_transport",
      "call_estranged_sister"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_next_session": 1,
      "cash_on_hand": 80,
      "medicaid_active": true,
      "nemt_enrolled": false,
      "family_nearby": false,
      "missed_sessions_this_month": 0,
      "estranged_sister_nearby": true,
      "prior_nemt_frustration": true
    }
  },
  {
    "id": "health_10",
    "title": "Stimulant shortage blocks ADHD medication refill",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "I have ADHD and my usual pharmacy says they're out of my stimulant medication and don't know when it's coming back due to a national shortage. I've called four other pharmacies with no luck. I have a big presentation at work in two days and I'm already struggling to function without it.",
    "hidden_constraints": [
      "Her prescriber can approve switching to a different stimulant formulation, but her insurance requires a new prior authorization for any formulation change, which takes 3-5 business days (requires_new_pa=True)",
      "There's a mail-order specialty pharmacy with stock, but it requires 5 business days shipping unless she pays for costly overnight shipping she hasn't budgeted for (mail_order_available=True, overnight_shipping_cost=45)"
    ],
    "actions_count": 9,
    "action_samples": [
      "call_prescriber_for_alt_formulation",
      "use_pharmacy_shortage_locator_tool",
      "order_mail_order_standard_shipping"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "pharmacies_called": 4,
      "days_of_medication_left": 1,
      "prescriber_reachable": true,
      "alternate_formulation_tried": false,
      "insurance_active": true,
      "distress_level": 5,
      "requires_new_pa": true,
      "mail_order_available": true,
      "overnight_shipping_cost": 45
    }
  },
  {
    "id": "health_11",
    "title": "School denies IEP evaluation request for autistic child",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "My 8-year-old was diagnosed with autism last year and I requested a formal IEP evaluation from his school three months ago. They keep saying they're 'monitoring him' instead of doing the evaluation, and he's having daily meltdowns and getting sent home early. I don't know how much longer this can go on.",
    "hidden_constraints": [
      "Federal law requires the school to complete an evaluation within 60 days of a written request, and she submitted hers by email but never got a formal written acknowledgment, which may complicate proving the timeline (written_ack_missing=True)",
      "She can't easily leave work for repeated pickups because she's on a probationary period at a new job and afraid asking for time off could cost her the position (work_flexibility=False, job_probation=True)"
    ],
    "actions_count": 9,
    "action_samples": [
      "resubmit_written_evaluation_request",
      "cite_idea_60_day_timeline",
      "contact_special_education_advocate"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_written_request": 90,
      "diagnosis_documentation_available": true,
      "days_sent_home_this_month": 6,
      "advocate_contacted": false,
      "work_flexibility": false,
      "distress_level": 7,
      "written_ack_missing": true,
      "job_probation": true
    }
  },
  {
    "id": "health_12",
    "title": "Chemotherapy delayed after insurance coverage lapse",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "I'm in the middle of chemo for breast cancer and just got a letter saying my insurance lapsed because a premium payment didn't process. My next infusion is in 4 days and the cancer center says they can't schedule it without active coverage confirmed.",
    "hidden_constraints": [
      "The payment actually failed because her bank flagged the automatic payment as suspicious after a card number update she forgot to notify the insurer about (payment_failed_reason=card_update, insurer_notified_of_card=False)",
      "There's a 30-day retroactive reinstatement policy for marketplace plans if the payment issue is resolved quickly, but it requires a specific reinstatement request form, not just paying the premium (reinstatement_form_required=True)"
    ],
    "actions_count": 9,
    "action_samples": [
      "call_insurer_billing_immediately",
      "update_payment_method_and_pay",
      "submit_reinstatement_request_form"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_next_infusion": 4,
      "premium_payment_issue_resolved": false,
      "cash_on_hand": 200,
      "cancer_center_financial_counselor_contacted": false,
      "marketplace_plan": true,
      "treatment_delay_risk": 5,
      "insurer_notified_of_card": false,
      "reinstatement_form_required": true
    }
  },
  {
    "id": "health_13",
    "title": "Crisis line and therapy access blocked by language barrier",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "My mother has been having panic attacks and talking about not wanting to be alive since my father passed away last month. She only speaks Vietnamese fluently and every therapist waitlist I call is 3+ months long or doesn't have anyone who speaks her language. I'm scared to leave her alone.",
    "hidden_constraints": [
      "The national crisis line does have live interpreter access via a three-way call feature, but it's not advertised and most callers don't know to ask for it (crisis_line_interpreter_available=True but not_widely_known=True)",
      "There's a community mental health center with Vietnamese-speaking staff, but it only accepts new patients who are already established Medicaid members, and her mother's Medicaid enrollment is still pending (medicaid_pending=True)"
    ],
    "actions_count": 9,
    "action_samples": [
      "call_988_request_interpreter",
      "find_vietnamese_speaking_community_center",
      "expedite_medicaid_enrollment"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "waitlist_weeks_typical": 12,
      "language_matched_provider_found": false,
      "crisis_line_interpreter_available": true,
      "mother_currently_alone_risk": true,
      "family_support_hours_available": 4,
      "distress_level": 8,
      "medicaid_pending": true
    }
  },
  {
    "id": "health_14",
    "title": "HIV medication gap after moving states mid-treatment",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "I moved to a new state for a job three weeks ago and I'm HIV-positive on daily antiretroviral therapy. My old state's AIDS Drug Assistance Program doesn't transfer automatically, and I have about 6 days of medication left. I don't know the process here and I'm nervous about disclosing my status to a new doctor.",
    "hidden_constraints": [
      "His new employer insurance has a 90-day waiting period before coverage starts, which he forgot about when he took the job (employer_insurance_active stated True but actually pending=True)",
      "The new state's ADAP program requires proof of state residency (like a lease or utility bill) that he doesn't have yet since he's staying in a short-term sublet without his name on any bill (proof_of_residency_available=False)"
    ],
    "actions_count": 10,
    "action_samples": [
      "verify_employer_insurance_start_date",
      "apply_new_state_adap",
      "request_alternate_residency_proof"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_of_medication_left": 6,
      "new_state_adap_applied": false,
      "old_records_transferable": true,
      "new_hiv_provider_found": false,
      "employer_insurance_active": true,
      "stigma_concern_level": 7,
      "proof_of_residency_available": false
    }
  },
  {
    "id": "health_15",
    "title": "Medicare denies home health aide for parent with dementia",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "My 81-year-old father has moderate dementia and just got denied for Medicare home health aide coverage because they say he doesn't meet the 'homebound' and 'skilled need' requirements. I work full time and can't be there during the day, and I'm worried about him being alone.",
    "hidden_constraints": [
      "The denial was actually based on an outdated assessment that didn't include his recent fall, which would likely change the 'skilled need' determination if resubmitted (assessment_outdated=True)",
      "Her sibling would be willing to help but works nights and has been assuming someone else already asked, since no one has actually called to coordinate (sibling_available_hours_weekly=0, sibling_never_asked=True)"
    ],
    "actions_count": 9,
    "action_samples": [
      "request_reassessment_with_fall_incident",
      "file_medicare_appeal",
      "call_sibling_to_coordinate"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_i_return_to_work": 2,
      "denial_appeal_filed": false,
      "adult_day_program_researched": false,
      "sibling_available_hours_weekly": 0,
      "savings_remaining": 4000,
      "safety_incidents_this_month": 1,
      "assessment_outdated": true,
      "sibling_never_asked": true
    }
  },
  {
    "id": "health_16",
    "title": "Medication-assisted treatment access gap after release from jail",
    "domain": "医疗债务 (Medical Debt & Care)",
    "domain_id": "health",
    "persona": "I got released from county jail yesterday after two weeks and they cut off my buprenorphine while I was in there even though I'd been stable on it for a year. I'm in withdrawal and scared I'm going to relapse if I can't get back on it soon. I don't have my ID or insurance card, they got lost while I was locked up.",
    "hidden_constraints": [
      "His Medicaid was automatically suspended (not terminated) during incarceration and can be reactivated same-day with a phone call, but he doesn't know this and assumes he has to reapply from scratch (medicaid_active_status_unknown=True, actually_just_suspended=True)",
      "He's currently staying at a shelter that doesn't allow him to receive mail or hold medication securely, which could complicate take-home dosing (housing_stable=False, shelter_no_secure_storage=True)"
    ],
    "actions_count": 10,
    "action_samples": [
      "call_medicaid_reactivation_line",
      "contact_prior_buprenorphine_prescriber",
      "walk_in_to_opioid_treatment_program"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_release": 1,
      "withdrawal_severity": 7,
      "id_document_available": false,
      "prior_prescriber_contactable": true,
      "medicaid_active_status_unknown": true,
      "housing_stable": false,
      "shelter_no_secure_storage": true
    }
  },
  {
    "id": "housing_01",
    "title": "Electric shutoff notice with medical equipment at home",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "My electric company sent a shutoff notice for tomorrow because I'm $412 behind. My mom lives with me and uses an oxygen concentrator. I need to figure out how to stop this before tomorrow.",
    "hidden_constraints": [
      "No car, so any in-person office visit (utility walk-in center, LIHEAP office) is very hard to reach (has_car=false)",
      "Already received a LIHEAP award earlier this year and is capped from getting another this cycle (has_liheap_award_this_year=false is misleading name; see disclosure) -- represented via liheap_capped_out"
    ],
    "actions_count": 8,
    "action_samples": [
      "call_utility_medical_hold",
      "apply_liheap_online",
      "visit_liheap_office_in_person"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "balance_owed": 412,
      "days_until_shutoff": 1,
      "has_medical_equipment_at_home": true,
      "has_car": false,
      "has_liheap_award_this_year": false,
      "income_docs_ready": true,
      "utility_has_medical_hold_policy": true,
      "phone_minutes_available": true,
      "liheap_capped_out": true
    }
  },
  {
    "id": "housing_02",
    "title": "Foreclosure sale date set after missing mediation deadline",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "I got a notice that my house has a foreclosure sale date in 21 days. I've been trying to modify my loan for months but everything feels like it fell apart. I don't want to lose the house my kids grew up in.",
    "hidden_constraints": [
      "Missed the state's foreclosure mediation program deadline, so mediation is no longer available as a path (missed_mediation_deadline=true)",
      "Has never contacted a HUD-approved housing counselor, a free resource that could still help (has_hud_counselor_contact=false)"
    ],
    "actions_count": 8,
    "action_samples": [
      "request_mediation",
      "call_hud_counselor",
      "apply_loan_modification"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_sale": 21,
      "months_behind": 5,
      "missed_mediation_deadline": true,
      "has_bank_account": true,
      "has_hoa_dispute": false,
      "income_stable_now": true,
      "has_hud_counselor_contact": false
    }
  },
  {
    "id": "housing_03",
    "title": "Black mold in apartment and landlord threatening eviction after complaint",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "There's black mold spreading in my bathroom ceiling and my kid has had a cough for weeks. When I asked the landlord to fix it he said he'd 'look into not renewing my lease.' I don't know my rights here and I'm scared.",
    "hidden_constraints": [
      "Is undocumented and afraid that contacting code enforcement or courts could expose immigration status (is_undocumented=true)",
      "Does not have a written copy of the lease, which weakens formal complaint/repair-and-deduct options (has_written_lease_copy=false)"
    ],
    "actions_count": 8,
    "action_samples": [
      "call_code_enforcement",
      "send_written_repair_demand",
      "request_lease_copy"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_complaint": 10,
      "mold_confirmed_by_photos": true,
      "has_written_lease_copy": false,
      "is_undocumented": true,
      "rent_current": true,
      "child_health_symptoms": true,
      "city_has_habitability_code": true
    }
  },
  {
    "id": "housing_04",
    "title": "Roommate on the lease is forcing me out with no notice",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "My roommate is the only one on the lease and just told me I have 5 days to leave after an argument. I've lived here 8 months and paid rent every month, but I never signed anything myself. I have nowhere lined up.",
    "hidden_constraints": [
      "Savings are only $150, far below a typical move-in deposit + first month's rent (savings_for_deposit=150)",
      "Not named on the lease, so tenant-protection eviction procedures may not clearly apply, but 8 months of residency and payment proof could establish tenant status (months_residency and has_rent_payment_proof)"
    ],
    "actions_count": 9,
    "action_samples": [
      "assert_tenant_status_with_proof",
      "invoke_standard_lease_notice_period",
      "call_tenant_rights_hotline"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_to_leave": 5,
      "name_on_lease": false,
      "months_residency": 8,
      "has_rent_payment_proof": true,
      "savings_for_deposit": 150,
      "has_car": true,
      "credit_score_ok": true
    }
  },
  {
    "id": "housing_05",
    "title": "Mobile home park closing and my home may be too old to move",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "The park where my mobile home has sat for 19 years is closing in 90 days to build condos. I own the home outright but not the land. I need to figure out if I can move it or what else I can do.",
    "hidden_constraints": [
      "The home is 34 years old and structurally too fragile for any licensed mover to relocate it (home_moveable_by_movers=false)",
      "There is a state mobile-home-park-closure relocation assistance fund, but nothing about it has been checked yet, and its deadline is close (state_has_relocation_fund true but must apply before relocation_grant_deadline_passed becomes true)"
    ],
    "actions_count": 8,
    "action_samples": [
      "get_mover_quotes",
      "apply_state_relocation_fund",
      "negotiate_park_owner_payout"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_closure": 90,
      "home_age_years": 34,
      "home_moveable_by_movers": false,
      "relocation_grant_deadline_passed": false,
      "savings": 2200,
      "has_truck_or_mover_quote": false,
      "state_has_relocation_fund": true
    }
  },
  {
    "id": "housing_06",
    "title": "Section 8 voucher expiring and no landlord will accept it",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "I finally got my housing voucher approved after two years on the waitlist, but it expires in 18 days and every landlord I call says they don't take vouchers. I'm currently in a shelter with my two kids.",
    "hidden_constraints": [
      "The city has no source-of-income anti-discrimination law, so landlords refusing vouchers outright is legal here, narrowing the pool (source_of_income_protection_law=false)",
      "The voucher can actually be extended once if the tenant shows a documented good-faith search, but this hasn't been requested yet (voucher_extension_eligible=true, must act before expiry)"
    ],
    "actions_count": 9,
    "action_samples": [
      "request_voucher_extension",
      "file_source_of_income_discrimination_complaint",
      "ask_caseworker_for_landlord_list"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_voucher_expires": 18,
      "landlords_contacted": 6,
      "voucher_extension_eligible": true,
      "source_of_income_protection_law": false,
      "has_move_in_docs_ready": true,
      "in_shelter_now": true,
      "has_caseworker": true
    }
  },
  {
    "id": "housing_07",
    "title": "Two months behind on rent after losing my job",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "I got laid off ten weeks ago and I'm now two months behind on rent, about $2,400. My landlord filed for eviction and I have a court date in 12 days. I need a plan.",
    "hidden_constraints": [
      "Credit is frozen due to a past identity theft issue, which blocks some rental assistance programs requiring a credit pull (credit_frozen=true)",
      "No smartphone, only occasional access to a library computer, which limits mobile-only application portals and SMS-based caseworker communication (has_smartphone=false)"
    ],
    "actions_count": 8,
    "action_samples": [
      "apply_erap_online_computer",
      "apply_erap_mobile_app",
      "request_court_mediation"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_court": 12,
      "amount_owed": 2400,
      "credit_frozen": true,
      "has_smartphone": false,
      "has_computer_access": true,
      "unemployment_benefits_pending": true,
      "has_erap_eligibility": true
    }
  },
  {
    "id": "housing_08",
    "title": "Gas heat shutoff notice in winter with a newborn at home",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "It's freezing out and I just got a notice my gas will be shut off in 4 days over an $890 balance. I have a 6-week-old baby at home. The landlord says the furnace isn't his responsibility since the gas bill is in my name.",
    "hidden_constraints": [
      "The state has a winter shutoff moratorium in freezing temperatures that could legally block the shutoff, but it must be actively invoked (state_winter_moratorium_active=true, not automatic)",
      "Income documents for LIHEAP are not yet gathered/ready, which will slow any assistance application (income_docs_ready=false)"
    ],
    "actions_count": 8,
    "action_samples": [
      "invoke_winter_moratorium",
      "apply_liheap_expedited",
      "gather_income_docs"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_shutoff": 4,
      "balance_owed": 890,
      "has_newborn_at_home": true,
      "outdoor_temp_freezing": true,
      "landlord_will_repair": false,
      "state_winter_moratorium_active": true,
      "income_docs_ready": false
    }
  },
  {
    "id": "housing_09",
    "title": "Water shut off because I'm not the account holder of record",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "My water got shut off today even though I paid my landlord for water every month. Turns out the account is in my landlord's name and he's behind on paying the water utility himself. I have three kids and no water in the house.",
    "hidden_constraints": [
      "Local utility rules actually allow a tenant to open their own account and restore service even when the landlord is the delinquent party, but this isn't advertised (tenant_can_open_own_account=true)",
      "Landlord is not responding to calls/texts, so any solution requiring landlord cooperation will stall (landlord_responsive=false)"
    ],
    "actions_count": 8,
    "action_samples": [
      "open_tenant_water_account",
      "demand_landlord_pay_utility",
      "file_code_enforcement_complaint"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_without_water": 1,
      "account_holder_is_landlord": true,
      "has_proof_of_rent_payments": true,
      "tenant_can_open_own_account": true,
      "landlord_responsive": false,
      "bottled_water_budget": 20
    }
  },
  {
    "id": "housing_10",
    "title": "Need to leave a shared lease with an abusive partner safely",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "I need to get out of the apartment I share with my partner. Things have gotten unsafe and I filed for a temporary restraining order yesterday, but we're both on the lease together and I don't have my ID, it's still inside.",
    "hidden_constraints": [
      "Government ID is still inside the shared apartment, blocking many intake processes that require ID (has_government_id=false)",
      "Has not yet connected with a domestic violence advocate, who could help with lease-breaking protections and safety planning (has_domestic_violence_advocate=false)"
    ],
    "actions_count": 8,
    "action_samples": [
      "contact_dv_advocate",
      "use_lease_early_termination_dv_law",
      "request_civil_standby_for_belongings"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "restraining_order_pending": true,
      "both_names_on_lease": true,
      "has_government_id": false,
      "days_since_incident": 1,
      "has_domestic_violence_advocate": false,
      "savings": 300,
      "safe_place_tonight": true
    }
  },
  {
    "id": "housing_11",
    "title": "Roof collapsed after the storm and my renters insurance had lapsed",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "A tree came through my roof during last night's storm and half my apartment is unlivable. I called my renters insurance and found out my policy lapsed two months ago because a payment bounced. I have until tomorrow to register for FEMA assistance based on what I read.",
    "hidden_constraints": [
      "Renters insurance lapsed two months ago due to a bounced payment, so damaged belongings won't be covered by insurance (renters_insurance_active=false)",
      "FEMA individual assistance registration has a real but often-extended deadline; checking the actual current deadline (rather than assuming tomorrow) matters, since acting on wrong info could cause the user to skip other options"
    ],
    "actions_count": 8,
    "action_samples": [
      "register_fema_assistance",
      "request_landlord_temp_relocation",
      "check_actual_fema_deadline"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "renters_insurance_active": false,
      "fema_registration_deadline_days": 1,
      "landlord_responsive": true,
      "has_photos_of_damage": true,
      "temp_shelter_needed": true,
      "savings": 600
    }
  },
  {
    "id": "housing_12",
    "title": "Rent increase I can't afford on a fixed Social Security income",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "My rent is going up $340 a month starting next month and my Social Security check doesn't stretch that far already. I'm 74 and have lived here 11 years. I don't know what my options are.",
    "hidden_constraints": [
      "Has significant hearing impairment that makes phone-based hotlines and automated call systems very difficult to use (is_hearing_impaired=true)",
      "Has no email access at all, which blocks many online application portals for senior/affordable housing and rental assistance (has_email_access=false)"
    ],
    "actions_count": 8,
    "action_samples": [
      "check_notice_law_compliance",
      "apply_senior_housing_waitlist",
      "apply_online_rental_assistance"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_increase": 30,
      "monthly_income": 1450,
      "new_rent_amount": 1290,
      "is_hearing_impaired": true,
      "has_email_access": false,
      "senior_housing_waitlist_status": false,
      "local_rent_increase_notice_law_days": 60
    }
  },
  {
    "id": "housing_13",
    "title": "Losing student housing after a visa work-hour violation fear",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "My university housing contract ends in 10 days and I can't afford a deposit for off-campus housing. I'm an international student on an F-1 visa and my family back home can't send money right now because of a banking issue there.",
    "hidden_constraints": [
      "As an F-1 visa holder, work is legally capped at 20 hours/week during the term, ruling out picking up lots of extra paid hours to cover a deposit fast (work_hours_limit_20_per_week=true)",
      "Family remittances are currently blocked by a banking issue abroad, so that expected source of funds is not actually available right now (family_remittance_available=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "contact_international_student_office",
      "receive_family_wire_transfer_directly",
      "apply_campus_emergency_fund"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_housing_ends": 10,
      "visa_status_f1": true,
      "work_hours_limit_20_per_week": true,
      "family_remittance_available": false,
      "savings": 180,
      "international_student_office_contacted": false,
      "on_campus_emergency_fund_eligible": true
    }
  },
  {
    "id": "housing_14",
    "title": "Behind on rent while my VA disability claim is still pending",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "I'm a veteran and I'm two weeks from being evicted. My disability claim has been sitting with the VA for 7 months and I haven't gotten a decision yet, so I have basically no income coming in right now.",
    "hidden_constraints": [
      "No direct deposit account set up with the VA, which will delay disbursement even once benefits or emergency funds are approved (has_direct_deposit_setup=false)",
      "The VA claim being pending 7 months means regular disability income isn't a current resource; the person likely doesn't realize the SSVF homelessness prevention program doesn't require the claim to be resolved first (va_ssvf_eligible=true)"
    ],
    "actions_count": 9,
    "action_samples": [
      "apply_ssvf_homeless_prevention",
      "receive_expedited_fund_disbursement",
      "setup_direct_deposit"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_eviction": 14,
      "va_claim_pending_months": 7,
      "has_direct_deposit_setup": false,
      "amount_owed": 1800,
      "va_ssvf_eligible": true,
      "has_dd214": true
    }
  },
  {
    "id": "housing_15",
    "title": "Landlord trying to evict us right after our fair housing accommodation request",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "We asked our landlord to install a ramp for our son's wheelchair and two weeks later got a 30-day notice to vacate for 'renovations.' My son is 9 and uses a power wheelchair full time. We think this is retaliation but I don't know how to prove it or what to do.",
    "hidden_constraints": [
      "No fair housing complaint has been filed yet, and the timing (2 weeks after the accommodation request) is a key piece of evidence that needs to be formally documented quickly (fair_housing_complaint_filed=false)",
      "Doesn't yet have a doctor's note formally establishing the son's disability and need for the ramp, which strengthens both the fair housing case and future accessible-unit applications (has_doctors_note_for_disability=false)"
    ],
    "actions_count": 8,
    "action_samples": [
      "file_hud_fair_housing_complaint",
      "get_doctors_note",
      "verify_renovation_permits"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_move_out": 30,
      "accommodation_request_date_days_ago": 14,
      "fair_housing_complaint_filed": false,
      "has_doctors_note_for_disability": false,
      "renovation_permits_filed_by_landlord": false,
      "wheelchair_accessible_units_nearby": 2
    }
  },
  {
    "id": "housing_16",
    "title": "Public housing voucher recertification missed after a hospital stay",
    "domain": "住房与驱逐 (Housing & Eviction)",
    "domain_id": "housing",
    "persona": "I was hospitalized for two weeks and missed my annual Section 8 recertification paperwork deadline. Now I got a letter saying my voucher will be terminated in 15 days unless I respond. I don't have a scanner or fax and I'm still recovering.",
    "hidden_constraints": [
      "No access to a scanner or fax machine at home, which the housing authority's paperwork process typically requires (has_scanner_or_fax_access=false)",
      "Housing authorities generally allow a 'good cause' reinstatement for missed recertification due to documented medical emergencies, but this must be actively requested with medical proof (good_cause_reinstatement_possible=true)"
    ],
    "actions_count": 8,
    "action_samples": [
      "request_good_cause_reinstatement",
      "submit_recert_via_library_scanner",
      "request_paper_mail_submission_option"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_termination": 15,
      "recert_deadline_missed_due_to_hospitalization": true,
      "has_hospital_discharge_records": true,
      "has_scanner_or_fax_access": false,
      "good_cause_reinstatement_possible": true,
      "mobility_limited_currently": true
    }
  },
  {
    "id": "insurance_denial_01",
    "title": "Worker with an $18,400 surprise bill after an insurance denial",
    "domain": "财务借贷 (Predatory Debt & Finance)",
    "domain_id": "financial",
    "persona": "My insurance denied coverage for my emergency surgery — they say it was 'not medically necessary.' The hospital bill is $18,400. I work full time but I have about $600 in my HSA and no savings. The denial letter says I have 30 days to appeal.",
    "hidden_constraints": [
      "Has not yet requested the itemized bill (has_itemized_bill=false)",
      "Income qualifies for the hospital's charity-care program, but the user does not know this program exists"
    ],
    "actions_count": 9,
    "action_samples": [
      "request_itemized_bill",
      "file_internal_appeal",
      "request_external_review"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "bill": 18400,
      "appeal_deadline_days": 30,
      "has_denial_letter": true,
      "has_itemized_bill": false,
      "internal_appeal_done": false,
      "employed": true,
      "hsa_balance": 600,
      "financial_aid_income_eligible": true
    }
  },
  {
    "id": "legal_01",
    "title": "Asylum one-year filing deadline closing in with incomplete evidence",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "I fled here almost a year ago and I still haven't filed my asylum application. I just found out there's a one-year deadline and I think I'm about to miss it. I have some documents from home but not everything, and I don't have a lawyer.",
    "hidden_constraints": [
      "Missed a prior notice because of a hospitalization that could support an extraordinary-circumstances exception, but has no medical records yet (extraordinary_circumstance_documented=false)",
      "Has no funds for a private attorney beyond a token consultation fee (funds=900)"
    ],
    "actions_count": 9,
    "action_samples": [
      "file_i589_pro_se_now",
      "call_pro_bono_asylum_clinic",
      "retain_private_attorney"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_deadline": 18,
      "funds": 900,
      "has_country_conditions_evidence": false,
      "has_pro_bono_referral": false,
      "attorney_retained": false,
      "form_i589_drafted": false,
      "extraordinary_circumstance_documented": false,
      "entered_lawfully": true
    }
  },
  {
    "id": "legal_02",
    "title": "DACA renewal lapsed and work permit expired last month",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "My DACA and work permit expired five weeks ago because I mailed my renewal late. I lost my job because I couldn't show a valid EAD. I've been here since I was six and have no other status. I don't know if I can even fix this now.",
    "hidden_constraints": [
      "There's an old, unresolved removal order from a missed hearing over a decade ago that most DACA renewal help won't catch unless asked (prior_removal_order=false initially, revealed as true on probing)",
      "Funds are extremely limited, ruling out full-fee expedited attorney help (funds=650)"
    ],
    "actions_count": 9,
    "action_samples": [
      "file_daca_renewal_now",
      "call_daca_legal_hotline",
      "consult_immigration_attorney"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_expiration": 35,
      "funds": 650,
      "renewal_filed": false,
      "attorney_consulted": false,
      "prior_removal_order": false,
      "employer_willing_to_rehire": true,
      "has_prior_daca_grant": true
    }
  },
  {
    "id": "legal_03",
    "title": "Master calendar removal hearing in ten days with no attorney",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "I have a removal (deportation) hearing in ten days and I still don't have a lawyer. I was pulled over for a broken taillight and it turned into an immigration hold. I have a wife and two US-citizen kids. I'm terrified I'll be deported before I even understand what's happening.",
    "hidden_constraints": [
      "Qualifies in principle for cancellation of removal (ten years presence, US-citizen children) but has never assembled proof of continuous residence (ten_years_presence_documented=false)",
      "Cannot afford a private removal-defense attorney at short notice; only enough for a limited consult (funds=1200)"
    ],
    "actions_count": 9,
    "action_samples": [
      "call_eoir_pro_bono_list",
      "request_continuance_to_find_counsel",
      "hire_removal_defense_attorney"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_hearing": 10,
      "funds": 1200,
      "has_removal_defense_attorney": false,
      "continuance_requested": false,
      "eligible_for_cancellation": true,
      "ten_years_presence_documented": false,
      "criminal_record_clean": true
    }
  },
  {
    "id": "legal_04",
    "title": "Spouse detained by ICE overnight, kids need care and family is mixed-status",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "My husband was detained by ICE yesterday morning during a routine check-in and I haven't been able to reach him since. I'm undocumented too but our two kids are US citizens. I don't know where he's being held, whether I should even go looking for him, or what happens to us.",
    "hidden_constraints": [
      "The user herself is undocumented, so showing up in person at the detention facility or a police station carries her own arrest risk (own_status_undocumented=true)",
      "No power of attorney or guardianship paperwork exists for the kids if she were also detained (power_of_attorney_signed=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "use_detainee_locator_system",
      "call_detention_hotline",
      "hire_attorney_for_detainee"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "hours_since_detention": 26,
      "funds": 700,
      "detainee_location_known": false,
      "attorney_for_detainee": false,
      "childcare_plan_in_place": true,
      "own_status_undocumented": true,
      "power_of_attorney_signed": false
    }
  },
  {
    "id": "legal_05",
    "title": "L-1 blanket petition revoked after company restructuring, status now in question",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "My company just told me our L-1 blanket petition approval was revoked because of a corporate restructuring, and HR isn't sure what that means for my status. I've been transferred here for three years and my green card process was mid-way through. I don't even know if I'm still legally employed right now.",
    "hidden_constraints": [
      "The employer's immigration counsel has gone unresponsive for two weeks because the company is in the middle of layoffs, though this hasn't been said outright (employer_immigration_counsel_responsive=false)",
      "The pending PERM labor certification could be at risk if the employing entity itself is restructured out of existence, a fact HR has not disclosed (green_card_process_stage='PERM filed' but jeopardized)"
    ],
    "actions_count": 10,
    "action_samples": [
      "request_written_status_confirmation_from_hr",
      "retain_independent_immigration_attorney",
      "file_individual_l1_petition"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_revocation_notice": 3,
      "funds": 3200,
      "status_confirmed_valid": false,
      "green_card_process_stage": "PERM filed",
      "employer_immigration_counsel_responsive": false,
      "individual_l1_petition_possible": true,
      "grace_period_days": 60
    }
  },
  {
    "id": "legal_06",
    "title": "Naturalization interview flagged an old unfiled tax year",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "I had my naturalization interview yesterday and the officer said I need to submit proof I filed taxes for a year I'm pretty sure I actually missed. I've been a green card holder for eight years and never had any other issues. Now I'm worried they'll deny me or worse.",
    "hidden_constraints": [
      "The missed tax year coincided with a period of unemployment and the person genuinely never filed, not just misplaced records (missing_tax_year_confirmed=false, will resolve true)",
      "Funds are tight, limiting options to a low-cost tax preparer rather than a full accountant plus attorney combo (funds=1100)"
    ],
    "actions_count": 10,
    "action_samples": [
      "request_irs_tax_transcript",
      "consult_immigration_attorney",
      "file_delinquent_return_now"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_to_respond": 30,
      "funds": 1100,
      "missing_tax_year_confirmed": false,
      "tax_transcript_requested": false,
      "amended_return_filed": false,
      "immigration_attorney_consulted": false,
      "continuous_residence_otherwise_clean": true
    }
  },
  {
    "id": "legal_07",
    "title": "ICE agents came to the door this morning, mixed-status household in shock",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "Two ICE agents knocked on our door this morning asking for someone who used to live here years ago. We didn't open the door but I'm shaking. My husband has a work permit, I don't have any status, and our teenager was home and saw the whole thing through the window. I don't know if they'll come back.",
    "hidden_constraints": [
      "No family emergency plan or emergency contact list exists in case of a future encounter or detention (family_emergency_plan_exists=false)",
      "Important identity documents (passports, birth certificates, medical records) are scattered across different family members' apartments, not centralized (id_documents_organized=false)"
    ],
    "actions_count": 11,
    "action_samples": [
      "learn_know_your_rights_basics",
      "call_immigrant_rights_hotline",
      "organize_key_documents_in_one_place"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "hours_since_visit": 4,
      "funds": 500,
      "door_opened": false,
      "id_documents_organized": false,
      "family_emergency_plan_exists": false,
      "know_your_rights_info": false,
      "teen_emotionally_shaken": true
    }
  },
  {
    "id": "legal_08",
    "title": "Refugee resettlement benefits cutting off at eight months with no case worker response",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "We arrived as refugees eight months ago and our resettlement agency's cash and medical assistance is ending this month. My case worker stopped responding to calls three weeks ago. I have two kids, a part-time job that doesn't cover rent, and I don't know what benefits I still qualify for.",
    "hidden_constraints": [
      "The assigned case worker has effectively stopped responding for three weeks, meaning the standard resettlement-agency path is a dead end unless escalated (case_worker_responsive=false in reality, disclosed on asking)",
      "Part-time income has never been formally documented, which is required for most public benefit applications (part_time_income_documented=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "apply_snap_and_medicaid_directly",
      "document_part_time_income",
      "escalate_to_agency_supervisor"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_benefits_end": 12,
      "funds": 380,
      "case_worker_responsive": true,
      "employment_authorization_valid": true,
      "snap_medicaid_applied": false,
      "part_time_income_documented": false,
      "refugee_medical_assistance_active": true
    }
  },
  {
    "id": "legal_09",
    "title": "U-visa police certification stalled while abuser threatens to report her",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "I'm applying for a U-visa as a crime victim after reporting an assault, but the police certification I need has been stuck for four months and no one returns my calls. My ex found out I reported him and is threatening to call ICE on me out of spite. I don't have status right now and I'm scared.",
    "hidden_constraints": [
      "There is a prosecutor's victim-witness liaison who can pressure the police department for the certification, but the person doesn't know this contact exists (prosecutor_contact_available=false, discoverable)",
      "No personal safety plan exists despite the active threat from the ex, including no changed locks or protective order (safety_plan_in_place=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "follow_up_with_police_certifying_agency",
      "contact_victim_witness_liaison",
      "escalate_via_liaison"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_certification_requested": 120,
      "funds": 900,
      "i918b_certification_received": false,
      "attorney_retained": false,
      "safety_plan_in_place": false,
      "police_report_filed": true,
      "prosecutor_contact_available": false
    }
  },
  {
    "id": "legal_10",
    "title": "VAWA self-petition needed but abusive spouse controls all the documents",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "My husband sponsored my green card but he's controlling and abusive, and I just learned I can file a VAWA self-petition without his knowledge. The problem is he keeps our passports, marriage certificate, and my old visa paperwork locked in his home office. I want out but I don't know how to do this without him finding out.",
    "hidden_constraints": [
      "She has no access to her own passport or marriage certificate since he keeps them locked away, meaning duplicates must be obtained separately (has_access_to_documents=false)",
      "There is no safe, private way to receive mail or calls at the current shared address without him seeing it (safe_contact_method_established=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "consult_vawa_attorney_confidentially",
      "set_up_safe_mailing_address",
      "request_document_duplicates_independently"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_planning": 5,
      "funds": 250,
      "has_access_to_documents": false,
      "safe_contact_method_established": false,
      "vawa_attorney_consulted": false,
      "evidence_of_abuse_gathered": false,
      "shelter_bed_available": true
    }
  },
  {
    "id": "legal_11",
    "title": "TPS designation ending in 90 days with no backup status identified",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "The government just announced my country's TPS designation is ending in 90 days. I've had TPS for six years, own a small cleaning business, and have a US-citizen daughter. I don't know if I qualify for anything else or what happens to my work permit and my business when this ends.",
    "hidden_constraints": [
      "Never assessed whether she might independently qualify for asylum based on conditions back home, or for a family-based path through her US-citizen daughter once she turns 21 (alternate_status_assessed=false)",
      "The business license and commercial insurance are directly tied to the current EAD number and will lapse automatically when TPS-based work authorization ends (business_license_tied_to_ead=true)"
    ],
    "actions_count": 10,
    "action_samples": [
      "consult_immigration_attorney_for_status_review",
      "call_free_tps_legal_clinic",
      "explore_asylum_eligibility"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_termination": 90,
      "funds": 2100,
      "alternate_status_assessed": false,
      "business_license_tied_to_ead": true,
      "attorney_consulted": false,
      "possible_asylum_claim": true,
      "daughter_is_citizen": true
    }
  },
  {
    "id": "legal_12",
    "title": "Unaccompanied teen needs a state custody order before turning 18 for SIJS eligibility",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "I'm 17 and I came here alone two years ago to escape an abusive home. My social worker says I might qualify for Special Immigrant Juvenile Status but I need a state juvenile court order first, and I turn 18 in four months. I live with a family friend now but nothing is legally official.",
    "hidden_constraints": [
      "The juvenile court process to get a guardianship order and the special findings typically takes 8-14 weeks in this jurisdiction, meaning delay of even a few weeks could blow the deadline (implicit timing risk not stated by user)",
      "The family friend has never been asked directly whether they're willing to formally petition as legal guardian in court, only informally hosting the teen (family_friend_willing_guardian=true but untested legally)"
    ],
    "actions_count": 9,
    "action_samples": [
      "find_free_immigrant_youth_legal_aid",
      "petition_for_juvenile_guardianship",
      "obtain_special_findings_order"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_18th_birthday": 120,
      "funds": 100,
      "guardianship_order_filed": false,
      "sijs_eligible_findings_obtained": false,
      "attorney_for_minor": false,
      "school_enrolled": true,
      "family_friend_willing_guardian": true
    }
  },
  {
    "id": "legal_13",
    "title": "Marriage-based green card interview officer hinted at fraud suspicion",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "We had our marriage-based green card interview today and the officer separated us for questioning and said some of our answers 'didn't match up.' They gave us a Request for Evidence with 30 days to respond. We really are married and in love, we've just never been great at keeping paperwork organized.",
    "hidden_constraints": [
      "The couple has always kept separate bank accounts and separate leases from a previous living arrangement, which reads as a red flag on paper even though the marriage is genuine (separate_bank_accounts=true)",
      "Neither spouse has actually read the full RFE letter closely yet — they've only skimmed the deadline, not the specific evidence categories requested (rfe_letter_reviewed=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "carefully_review_rfe_requirements",
      "retain_immigration_attorney_for_rfe",
      "compile_joint_evidence_of_bona_fide_marriage"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_to_respond": 30,
      "funds": 1800,
      "rfe_letter_reviewed": false,
      "joint_evidence_compiled": false,
      "attorney_retained": false,
      "marriage_genuine": true,
      "separate_bank_accounts": true
    }
  },
  {
    "id": "legal_14",
    "title": "OPT STEM extension employer flagged in E-Verify audit, 60-day grace clock started",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "My employer just told me they're under an E-Verify compliance audit and may have to let go of STEM OPT workers, including me, while it's investigated. That would start my 60-day unemployment grace period. I've put four years into this PhD-adjacent job and I don't want my STEM OPT to collapse over something I didn't even do.",
    "hidden_constraints": [
      "The DSO (designated school official) hasn't been contacted yet even though they must be notified promptly of any employment change to keep the SEVIS record valid (designated_school_official_contacted=false)",
      "It's unclear whether the audit will result in immediate termination or a corrective period, and the employer's HR has been vague about the actual timeline (audit_outcome_known=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "contact_dso_immediately",
      "request_written_timeline_from_employer",
      "start_new_employer_search"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "grace_period_days": 60,
      "funds": 2600,
      "actively_employed": true,
      "new_employer_search_started": false,
      "sevis_record_reviewed": false,
      "designated_school_official_contacted": false,
      "audit_outcome_known": false
    }
  },
  {
    "id": "legal_15",
    "title": "In absentia removal order after asylum interview notice went to the wrong address",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "I just found out I have an in absentia removal order because I missed a hearing I never got notice for. We moved apartments eight months ago and I guess the court mailed the notice to our old address. I have a work permit through my pending asylum case and now I don't know if that's about to disappear.",
    "hidden_constraints": [
      "The court's mailing records still show the old address because the change-of-address form (EOIR-33) was never actually filed with the immigration court, only with USPS (old_address_notice_confirmed=false initially, becomes true)",
      "Funds are tight relative to what a motion to reopen filing plus attorney fees typically costs (funds=1400)"
    ],
    "actions_count": 9,
    "action_samples": [
      "check_eoir_case_status_online",
      "gather_proof_of_address_change",
      "file_motion_to_reopen"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_since_order_discovered": 4,
      "funds": 1400,
      "motion_to_reopen_filed": false,
      "proof_of_address_change_gathered": false,
      "attorney_retained": false,
      "work_permit_still_shows_active": true,
      "old_address_notice_confirmed": false
    }
  },
  {
    "id": "legal_16",
    "title": "Sponsor withdrew the affidavit of support, green card holder now flagged as public charge risk",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "My brother, who sponsored my green card with an affidavit of support, just told me he's withdrawing his financial support because we had a falling out. I got a notice that my case is being reviewed for public charge concerns since I recently applied for a benefit. I have my green card interview in three weeks and I'm scared this ruins everything.",
    "hidden_constraints": [
      "The specific public benefit applied for may not even count against public charge determinations, but the person doesn't know which category it falls into (benefit_application_details_clear=false)",
      "Independent income from a recent job could meet the affidavit income threshold without needing any sponsor at all, but this hasn't been calculated (income_requirement_met_independently=false, resolvable)"
    ],
    "actions_count": 10,
    "action_samples": [
      "clarify_benefit_category_with_agency",
      "calculate_independent_income_eligibility",
      "find_new_joint_sponsor"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "days_until_interview": 21,
      "funds": 950,
      "new_joint_sponsor_identified": false,
      "affidavit_i864_resolved": false,
      "attorney_consulted": false,
      "benefit_application_details_clear": false,
      "income_requirement_met_independently": false
    }
  },
  {
    "id": "postpartum_financial_control_01",
    "title": "New mother with postpartum depression signs under a partner's financial control",
    "domain": "家庭照护 (Elder & Child Caregiving)",
    "domain_id": "family",
    "persona": "I had my baby six weeks ago. I stopped working before the birth, and my partner has taken over all the accounts — I have to ask him for money for diapers and he wants receipts. I've been crying most days and I don't feel like myself. My six-week OB checkup is on Friday.",
    "hidden_constraints": [
      "Partner monitors her phone calls; she has no reliably private time for voice calls (private_phone_time=false)",
      "She does have private browser access on her own device (private_browser_available=true)"
    ],
    "actions_count": 8,
    "action_samples": [
      "discuss_ppd_at_ob_followup",
      "call_postpartum_support_line",
      "use_text_based_support_chat"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "weeks_postpartum": 6,
      "has_own_income": false,
      "ppd_screen_positive": true,
      "ob_followup_scheduled": true,
      "private_phone_time": false,
      "private_browser_available": true,
      "advocate_contacted": false,
      "wic_applied": false
    }
  },
  {
    "id": "safety_01",
    "title": "Stalking by a former coworker seeking a protective order",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "A guy I used to work with two jobs ago keeps showing up wherever I am — outside my gym, in my apartment building's lobby, once at my sister's kid's soccer game. I've never dated him or given him my address. I want a protective order but I don't know how to even start, and I'm scared he'll escalate before anything is filed.",
    "hidden_constraints": [
      "She doesn't know his current address, which most protective-order paperwork requires for service (knows_his_current_address=false)",
      "She can't afford a private attorney and doesn't yet know free legal clinics exist (has_lawyer=false, but gated by clinic action)"
    ],
    "actions_count": 9,
    "action_samples": [
      "start_incident_log",
      "file_police_report",
      "file_protective_order_petition"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "incident_log_started": false,
      "has_photo_evidence": true,
      "has_lawyer": false,
      "can_afford_filing_fee": true,
      "knows_his_current_address": false,
      "police_report_filed": false,
      "order_filed": false
    }
  },
  {
    "id": "safety_02",
    "title": "Elderly parent trying to regain control of finances from an exploiting adult child",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "My son moved in with me two years ago after his divorce and became my power of attorney. Since then my savings have dropped from about $60,000 to under $4,000 and I don't get statements anymore — he says he 'handles it.' I'm 78, still sharp, and I want my accounts back under my own control before there's nothing left.",
    "hidden_constraints": [
      "She has no way to get to the bank or a lawyer's office on her own; her son controls the only car (has_own_transportation=false)",
      "She has never had a capacity evaluation on file, and revoking a POA against family resistance often gets challenged without one (capacity_documented=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "call_adult_protective_services",
      "request_bank_statements",
      "get_capacity_evaluation"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "funds_remaining": 4000,
      "has_bank_statements": false,
      "poa_revoked": false,
      "has_independent_phone_line": true,
      "adult_protective_services_contacted": false,
      "has_own_transportation": false,
      "capacity_documented": false
    }
  },
  {
    "id": "safety_03",
    "title": "Custody exchange safety planning with a violent co-parent",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "My ex has a history of grabbing and shoving me during arguments, and our custody order still has us doing exchanges in the driveway of his place. The next exchange is Saturday at 5pm, three days from now, and the last one ended with him blocking my car for ten minutes. I need this one to go safely.",
    "hidden_constraints": [
      "The supervised exchange center charges a fee per visit that she cannot currently afford (can_afford_center_fee=false)",
      "Filing an emergency motion to change the exchange location takes longer than 3 days through normal court process, so it won't help before Saturday (modification_motion_filed gated by time, not disclosed until asked)"
    ],
    "actions_count": 10,
    "action_samples": [
      "document_prior_incident",
      "bring_support_person_saturday",
      "use_supervised_exchange_center"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "days_until_exchange": 3,
      "existing_custody_order": true,
      "supervised_exchange_center_available": true,
      "can_afford_center_fee": false,
      "has_support_person_available": true,
      "modification_motion_filed": false,
      "incident_documented": true
    }
  },
  {
    "id": "safety_04",
    "title": "Adult sibling controlling disability benefits and finances",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "My older brother became my representative payee for my disability benefits four years ago after I had a bad stretch. I'm stable now but he still controls every dollar, only gives me $30 a week, and gets angry if I ask questions. I want to become my own payee again but I don't know how that process even works.",
    "hidden_constraints": [
      "She has no private mailing address separate from her brother's home, so SSA correspondence about a payee change would go to the shared address he controls (has_private_mailing_address=false)",
      "She hasn't gotten a doctor's letter confirming current stability, which SSA typically wants when reversing a payee decision (has_medical_stability_letter=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "call_ssa_to_request_payee_change",
      "get_medical_stability_letter",
      "set_up_private_mailbox"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "weekly_allowance": 30,
      "is_ssa_representative_payee": false,
      "has_medical_stability_letter": false,
      "has_own_id": true,
      "has_private_mailing_address": false,
      "ssa_appointment_scheduled": false,
      "bank_account_in_own_name": false
    }
  },
  {
    "id": "safety_05",
    "title": "Early recovery after exiting a labor trafficking situation",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "I got out two days ago from a job where I was made to work in a restaurant kitchen 90 hours a week and never paid — they took my passport when I arrived. A cook let me leave through the back door. I'm staying on a friend's couch now but I have no ID, no money, and I don't know what happens next.",
    "hidden_constraints": [
      "Her passport was confiscated by the employer and is still inside the restaurant, so any action assuming she has ID will fail (has_passport=false)",
      "Her immigration status was tied to the job and was never properly documented on her end, which affects which agencies she can safely approach first (immigration_status_documented=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "contact_trafficking_hotline",
      "meet_with_immigration_aware_advocate",
      "request_passport_return_via_advocate"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "days_since_exit": 2,
      "has_passport": false,
      "has_temporary_housing": true,
      "cash_on_hand": 12,
      "trafficking_advocate_contacted": false,
      "immigration_status_documented": false,
      "back_wages_claim_filed": false
    }
  },
  {
    "id": "safety_06",
    "title": "Reporting supervisor harassment while he controls scheduling and visa sponsorship",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "My manager has been making comments about my body and 'inviting' me to his hotel room during work trips for months. He's also the one who filed my H-1B sponsorship paperwork, and he controls my shift schedule, so I'm terrified reporting him could cost me my job and my status. I have documentation but I don't know how to report safely.",
    "hidden_constraints": [
      "Her employer is currently her only visa sponsor and she hasn't identified any alternate employer willing to sponsor a transfer (alternate_sponsor_identified=false)",
      "She hasn't spoken with an immigration attorney yet, so she doesn't actually know her legal protections if she's terminated during a report (immigration_attorney_consulted=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "organize_documentation",
      "consult_immigration_attorney_first",
      "file_eeoc_charge"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "months_of_documentation": 4,
      "has_screenshots": true,
      "hr_contacted": false,
      "eeoc_contacted": false,
      "immigration_attorney_consulted": false,
      "employer_is_sole_sponsor": true,
      "alternate_sponsor_identified": false
    }
  },
  {
    "id": "safety_07",
    "title": "Leaving a communal high-control religious group with family still inside",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "I've lived in a communal group for six years and finally decided to leave last week — I'm staying at a cousin's place two towns over now. My parents and younger brother are still there. I have no ID in my name, no credit history, and no idea what a normal budget or lease even looks like anymore.",
    "hidden_constraints": [
      "She has no state ID because the group held all members' identification centrally and hers was never returned (has_state_id=false)",
      "She has no documented employment history for the past six years since all her labor was inside the group and undocumented (employment_history_documented=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "request_id_with_ssn_card",
      "open_bank_account",
      "contact_cult_recovery_specialist"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "days_since_leaving": 6,
      "has_state_id": false,
      "has_ssn_card": true,
      "has_temporary_housing": true,
      "cult_aware_therapist_contacted": false,
      "employment_history_documented": false,
      "bank_account_opened": false
    }
  },
  {
    "id": "safety_08",
    "title": "Landlord using unit access and eviction threats to coerce a tenant",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "My landlord has a key and lets himself into my apartment when I'm not there — I've found things moved. Last week he said my rent could 'go easier' if I was 'nicer to him,' and now he's saying my lease renewal is 'not looking good.' I'm on a month-to-month and don't know if I have any real protection.",
    "hidden_constraints": [
      "She cannot currently afford moving costs or a deposit on a new place, which makes any 'just move out' plan infeasible right now (can_afford_moving_costs=false)",
      "She has no written record of the comment yet — it happened in person with no witnesses or texts, which weakens formal complaints until documented (has_written_evidence=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "document_incident_in_writing",
      "send_written_notice_of_illegal_entry",
      "contact_tenant_rights_organization"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "days_left_on_current_term": 20,
      "lease_is_month_to_month": true,
      "has_written_evidence": false,
      "can_afford_moving_costs": false,
      "tenant_rights_org_contacted": false,
      "changed_locks": false,
      "incident_reported_to_housing_authority": false
    }
  },
  {
    "id": "safety_09",
    "title": "Mother-in-law withholding passport as immigration-status leverage",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "I moved here two years ago on a spousal visa sponsored by my husband, and we live with his mother. She keeps my passport 'for safekeeping' and tells me if I ever cause trouble she'll tell immigration I abandoned the marriage. My husband isn't abusive himself but he won't stand up to her. I need my passport back and I need to know my actual rights.",
    "hidden_constraints": [
      "She doesn't yet know that many spousal visa categories don't require the sponsoring family's cooperation to maintain or adjust status, which changes what threats actually have teeth (knows_visa_independence_rules=false)",
      "She has no copy of her own passport information (number, photo page) since her mother-in-law holds the original, complicating a replacement request (has_passport=false blocks direct reissuance path)"
    ],
    "actions_count": 11,
    "action_samples": [
      "consult_immigration_attorney",
      "learn_visa_independence_rules",
      "request_passport_return_formally"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "months_married": 26,
      "has_passport": false,
      "has_marriage_certificate_copy": true,
      "immigration_attorney_consulted": false,
      "knows_visa_independence_rules": false,
      "trusted_translator_available": true,
      "domestic_violence_advocate_contacted": false
    }
  },
  {
    "id": "safety_10",
    "title": "Elder financial abuse by a hired in-home caregiver",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "I'm 82 and live alone since my husband passed. The home health aide I hired eight months ago started 'helping' with my mail and bills, and now I've noticed two credit cards opened in my name that I never authorized. She's here five days a week and I'm honestly a little afraid of how she'll react if she knows I noticed.",
    "hidden_constraints": [
      "She hasn't pulled her actual credit report yet, so she doesn't have full documentation of every account opened, only what showed up on two statements (has_credit_report_copy=false)",
      "She has no backup caregiver lined up, so immediately firing the aide would leave her without help for daily needs like medication and mobility (backup_caregiver_available=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "pull_full_credit_report",
      "request_credit_freeze",
      "file_police_report_identity_theft"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "caregiver_still_employed": true,
      "unauthorized_accounts_found": 2,
      "has_credit_report_copy": false,
      "backup_caregiver_available": false,
      "adult_child_nearby": true,
      "police_report_filed": false,
      "credit_freeze_requested": false
    }
  },
  {
    "id": "safety_11",
    "title": "Online harassment and doxxing campaign escalating to real-world contact",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "Someone I've never met started harassing me online three weeks ago after I posted about a hobby community dispute — now they've posted my home address and workplace, and yesterday someone matching their online description was photographed outside my building. I don't know their real identity and I'm not sure what's actually actionable versus just scary.",
    "hidden_constraints": [
      "She hasn't systematically archived the posts before they get deleted, so much of the pattern currently exists only as things she remembers seeing (has_screenshots_archived=false)",
      "She can't move or change her address in the near term due to a lease she can't break without a large penalty (can_change_address_soon=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "archive_all_evidence",
      "file_platform_reports",
      "file_police_report_stalking"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "weeks_of_harassment": 3,
      "has_screenshots_archived": false,
      "knows_harasser_real_identity": false,
      "workplace_notified": false,
      "police_report_filed": false,
      "can_change_address_soon": false,
      "platform_reports_filed": false
    }
  },
  {
    "id": "safety_12",
    "title": "Live-in au pair controlled by host family employer",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "I came here as an au pair eight months ago. The host family holds my passport 'for the visa paperwork,' pays me less than half of what the program says I should get, and the mother reads my texts when I leave my phone charging in the kitchen. I want to leave but I live in their house and don't know anyone else here.",
    "hidden_constraints": [
      "She has no independent savings since her pay has been withheld below program minimums for months (has_independent_savings=false)",
      "She hasn't identified any alternate host family or housing yet, and leaving without one would make her immediately unhoused (alternate_host_family_identified=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "call_au_pair_program_hotline",
      "request_rematch_to_new_family",
      "request_passport_return_via_sponsor"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "months_in_placement": 8,
      "has_passport": false,
      "program_sponsor_contacted": false,
      "knows_local_language_conversationally": true,
      "has_independent_savings": false,
      "alternate_host_family_identified": false,
      "au_pair_agency_hotline_available": true
    }
  },
  {
    "id": "safety_13",
    "title": "Ex-partner repeatedly violating an existing protective order",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "I got a protective order against my ex six months ago, but he's violated it three times now — texting from new numbers, showing up near my work, and last night driving slowly past my house. Each time I've reported it but nothing seems to change. I don't know if I should be doing something different at this point.",
    "hidden_constraints": [
      "Last night's drive-by hasn't been documented yet — no photo, no police call made in the moment, only her memory of it (current_violation_documented=false)",
      "She has no home security camera, so future drive-by incidents would again lack independent evidence unless she sets one up (has_home_security_camera=false)"
    ],
    "actions_count": 10,
    "action_samples": [
      "document_last_nights_violation",
      "report_current_violation_to_police",
      "contact_prosecutor_about_pattern"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "violation_count": 3,
      "current_violation_documented": false,
      "prior_violations_documented": true,
      "order_expiration_months_away": 6,
      "has_home_security_camera": false,
      "prosecutor_contact_made": false,
      "order_modification_requested": false
    }
  },
  {
    "id": "safety_14",
    "title": "Parent concerned about a teen's controlling relationship with a youth coach",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "My 16-year-old's swim coach has been texting her late at night, giving her 'special' one-on-one sessions, and telling her not to tell me about their conversations because I 'wouldn't understand.' She's started pulling away from me and defending him whenever I ask questions. I don't know how to handle this without pushing her further away.",
    "hidden_constraints": [
      "She hasn't actually seen the messages herself — her daughter mentioned them once and then went quiet, so there are no screenshots yet (has_message_screenshots=false)",
      "Her daughter currently shuts down and won't talk directly to her about it, which blocks any plan relying on the teen volunteering information (daughter_willing_to_talk_to_parent=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "consult_family_therapist_first",
      "build_rapport_before_pressing",
      "ask_daughter_directly_about_messages"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "daughter_still_attending_practice": true,
      "has_message_screenshots": false,
      "swim_club_admin_contacted": false,
      "child_protective_hotline_contacted": false,
      "daughter_willing_to_talk_to_parent": false,
      "family_therapist_available": true,
      "other_parents_noticed_pattern": false
    }
  },
  {
    "id": "safety_15",
    "title": "Roommate monitoring and isolating a tenant through shared lease control",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "My roommate is the only one on the lease and keeps tabs on who I talk to, goes through my stuff when I'm out, and once forwarded a private message I sent to a friend to embarrass me. I want to move out but she keeps saying she'll tell the landlord I broke house rules and get me blacklisted from renting nearby if I try to leave without her permission.",
    "hidden_constraints": [
      "She has no savings for a deposit on a new place since she's been paying her roommate cash with no formal record (has_savings_for_deposit=false)",
      "The landlord has never actually met her directly — her name isn't on any paperwork, so her roommate's threat of 'blacklisting' has less power than it sounds, but she doesn't know that yet (landlord_knows_her_directly=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "contact_landlord_directly",
      "learn_actual_tenant_standing",
      "start_emergency_savings_fund"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "on_lease_herself": false,
      "months_in_apartment": 5,
      "has_savings_for_deposit": false,
      "landlord_knows_her_directly": false,
      "sublease_agreement_written": false,
      "trusted_friend_housing_offer": true,
      "rental_history_documented": false
    }
  },
  {
    "id": "safety_16",
    "title": "Home health nurse stalked by a former patient's family member",
    "domain": "人身安全 (Physical Safety & Crisis)",
    "domain_id": "safety",
    "persona": "I'm a home health nurse and a patient's adult son I treated last year has been showing up at my other patients' addresses asking neighbors where I work next, and he left a note on my car two days ago. My agency knows a little but hasn't done much. I still have shifts scheduled this week and I don't know how to stay safe while still doing my job.",
    "hidden_constraints": [
      "Her shift schedule is publicly predictable because it's posted on a shared agency calendar that she assumed was private (route_is_predictable=true, tied to undisclosed calendar exposure)",
      "She hasn't filed anything formal yet — her agency only knows through a hallway comment, not an actual incident report (has_documented_incidents=false)"
    ],
    "actions_count": 9,
    "action_samples": [
      "document_all_incidents_formally",
      "file_workplace_violence_report",
      "request_schedule_privacy_review"
    ],
    "disclosures_count": 2,
    "initial_state": {
      "safe_to_talk_now": true,
      "days_since_note_left": 2,
      "shifts_this_week": 4,
      "agency_formally_notified": false,
      "route_is_predictable": true,
      "has_documented_incidents": false,
      "workplace_violence_report_filed": false,
      "schedule_flexibility_requested": false
    }
  },
  {
    "id": "visa_job_loss_01",
    "title": "H-1B worker laid off with a 60-day grace period and family in tow",
    "domain": "法律签证 (Legal Status & Deadlines)",
    "domain_id": "legal",
    "persona": "I was laid off yesterday. I'm on an H-1B visa, so I have a 60-day grace period before I fall out of status. My spouse is on an H-4 without work authorization and our two kids are in school here. We have $5,200 in savings.",
    "hidden_constraints": [
      "Neither spouse currently has any work authorization; any paid work (including cash gig work) is a status violation (work_authorized=false)",
      "Savings must also cover the family's ongoing rent and food during the grace period"
    ],
    "actions_count": 8,
    "action_samples": [
      "file_b2_change_of_status",
      "targeted_search_h1b_sponsor_employers",
      "consult_immigration_attorney"
    ],
    "disclosures_count": 1,
    "initial_state": {
      "days_left_grace": 60,
      "funds": 5200,
      "work_authorized": false,
      "status_change_pending": false,
      "has_new_offer": false,
      "attorney_consulted": false,
      "kids_in_school": true
    }
  }
];
