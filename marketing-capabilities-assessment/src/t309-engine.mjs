/* T3.09 diagnostic engine v0.1 — no scores or inferred verification. */
export const QUESTIONS=['Q-T309-01','Q-T309-02','Q-T309-03','Q-T309-04','Q-T309-05'];
export function assessT309(answers={}){
 const [claim,role,source,application,recency]=QUESTIONS.map(id=>answers[id]);
 const flags=[];
 if(claim==='unknown')flags.push('insufficient_information');
 if(claim==='documented'&&['internal_opinion','none','unknown'].includes(source))flags.push('weak_evidence_for_documented_claim');
 if(claim==='not_identified'&&['documented_example','recalled_example'].includes(application))flags.push('apparent_contradiction');
 if(application==='no_example')flags.push('application_not_demonstrated');
 if(recency==='not_reviewed')flags.push('recency_not_demonstrated');
 const next=nextT309(answers,flags);
 return {node_id:'T3.09',flags,next_question:next,capability_score:null,evidence_verified:false,scope_confirmed:false,reason:flags.includes('apparent_contradiction')?'Уточнить сегмент, роль и период: видимое противоречие может объясняться разным контекстом.':flags.includes('weak_evidence_for_documented_claim')?'Заявленное знание пока не подтверждено независимым источником.':flags.includes('insufficient_information')?'Недостаточно данных; это не нулевая способность.':'Самоотчёт не является проверенным доказательством.'};
}
export function nextT309(answers={},flags=[]){
 const [claim,role,source,application,recency]=QUESTIONS.map(id=>answers[id]);
 if(claim===undefined)return 'Q-T309-01';
 if(claim==='unknown'||claim==='not_identified')return null; // defer until scope clarification
 if(role===undefined)return 'Q-T309-02';
 if(source===undefined)return 'Q-T309-03';
 if(flags.includes('weak_evidence_for_documented_claim'))return null; // request artifact outside current questionnaire
 if(application===undefined)return 'Q-T309-04';
 if(recency===undefined)return 'Q-T309-05';
 return null;
}
