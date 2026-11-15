// RC3 adaptive self-report routing prototype v0.8. No scoring, no documents.
export const TERRITORIES = Array.from({length:13},(_,i)=>'T'+(i+1));
export const ANSWERS = Object.freeze(['yes','partial','no','unknown','na']);
export function nextStep({territory, answer, scope, basis, decisionUse, naReason, followupCount=0}={}) {
  if (!TERRITORIES.includes(territory)) throw new Error('Unknown RC3 territory');
  if (!ANSWERS.includes(answer)) return {type:'ask',field:'answer',reason:'missing_or_invalid_answer'};
  if (!scope) return {type:'ask',field:'scope',reason:'prevent_company_wide_inference'};
  if (answer==='unknown') return {type:'stop',status:'unknown',score:null,reason:'respondent_knowledge_gap'};
  if (answer==='na') return naReason
    ? {type:'stop',status:'not_applicable',score:null,reason:'context_specific'}
    : {type:'ask',field:'naReason',reason:'confirm_applicability'};
  if (answer==='no') return {type:'stop',status:'not_practiced',score:null,reason:'self_report_only'};
  if (answer==='partial' && !basis && followupCount<2)
    return {type:'ask',field:'basis',reason:'clarify_partial_practice'};
  if (answer==='yes' && !basis && followupCount<2)
    return {type:'ask',field:'basis',reason:'clarify_knowledge_basis'};
  if (!decisionUse && followupCount<2)
    return {type:'ask',field:'decisionUse',reason:'distinguish_activity_from_use'};
  return {type:'stop',status:answer==='partial'?'partial_claim':'practice_claim',score:null,reason:'enough_self_report_for_prototype'};
}
export function normalizeResponse(input) {
  const r={...input};
  if (r.answer==='dont_know') r.answer='unknown';
  if (r.answer==='not_applicable') r.answer='na';
  return r;
}
export function evaluate(input){return nextStep(normalizeResponse(input));}
