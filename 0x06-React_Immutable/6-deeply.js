import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  return map1.mergeDeep(map2);
}
