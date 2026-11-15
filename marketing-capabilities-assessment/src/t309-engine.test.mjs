import {assessT309,nextT309} from './t309-engine.mjs';
import assert from 'node:assert/strict';
const ids=['Q-T309-01','Q-T309-02','Q-T309-03','Q-T309-04','Q-T309-05'];
const cases=[
 [['documented','decision_maker','internal_opinion','no_example','not_reviewed'],['weak_evidence_for_documented_claim','application_not_demonstrated','recency_not_demonstrated']],
 [['documented','decision_maker','interviews','documented_example','dated_evidence'],[]],
 [['unknown','unknown','unknown','unknown','unknown'],['insufficient_information']],
 [['not_identified','decision_maker','won_lost_deals','documented_example','dated_evidence'],['apparent_contradiction']],
 [['hypothesis','user','observed_behavior','recalled_example','informal_review'],[]]
];
for(const [values,expected] of cases){const answers=Object.fromEntries(ids.map((id,i)=>[id,values[i]]));const result=assessT309(answers);assert.deepEqual(result.flags,expected);assert.equal(result.capability_score,null);assert.equal(result.evidence_verified,false)}
assert.equal(nextT309({}),'Q-T309-01');
assert.equal(nextT309({'Q-T309-01':'documented'}),'Q-T309-02');
assert.equal(nextT309({'Q-T309-01':'unknown'}),null);
assert.equal(nextT309({'Q-T309-01':'documented','Q-T309-02':'decision_maker','Q-T309-03':'interviews'}),'Q-T309-04');
console.log('9 checks passed (5 scenario cases + 4 routing checks)');
