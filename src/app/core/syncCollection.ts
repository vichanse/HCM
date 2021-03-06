import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { EntityStore, withTransaction } from '@datorama/akita';

export function syncCollection<T>(
  collection: AngularFirestoreCollection<T>,
  store: EntityStore<any, any>
) {
  function updateStore(actions) {
    if (actions.length === 0) {
      store.setLoading(false);
      return;
    }

    for (const action of actions) {
      const id = action.payload.doc.id;
      const entity = action.payload.doc.data();

      switch (action.type) {
        case 'added':
          store.add({ id, ...entity });
          break;
        case 'removed':
          store.remove(id);
          break;
        case 'modified':
          store.update(id, entity);
      }
    }
  }

  return collection
    .stateChanges(['added', 'modified', 'removed'])
    .pipe(withTransaction(updateStore));
}
