import elements from '../data/rc3-elements.json' with { type: 'json' };
import relations from '../data/rc3-relations.json' with { type: 'json' };

export { elements, relations };

export function territories() {
  const result = new Map();
  for (const element of elements) {
    if (!result.has(element.territory)) result.set(element.territory, new Map());
    const groups = result.get(element.territory);
    if (!groups.has(element.subgroup)) groups.set(element.subgroup, []);
    groups.get(element.subgroup).push(element);
  }
  return result;
}

// References in RC3 may be ranges, semicolon-delimited sets, or external IDs.
// Do not treat them as single element IDs or infer nonexistent edges.
export function relationsMentioning(elementId) {
  const escaped = elementId.replace(/[.*+?^$\{\}()|[\]\\]/g, '\\$&');
  const boundary = new RegExp('(^|[^A-Za-z0-9.])' + escaped + '(?=$|[^0-9])');
  return relations.filter(r => boundary.test(r.domain) || boundary.test(r.range));
}

export function validate() {
  const ids = new Set(elements.map(e => e.id));
  const relationIds = new Set(relations.map(r => r.id));
  const t = new Set(elements.map(e => e.territory));
  return {
    valid: elements.length === 185 && ids.size === 185 && relations.length === 50 && relationIds.size === 50 && t.size === 13,
    elements: elements.length, relations: relations.length, territories: t.size,
    missingDefinitions: elements.filter(e => !e.definition?.trim()).map(e => e.id),
    duplicateElementIds: elements.length - ids.size,
    duplicateRelationIds: relations.length - relationIds.size
  };
}
