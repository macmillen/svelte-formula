import { FormEl } from '../types/forms';
import { FormulaStores } from '../types/formula';

/**
 * Creates the handler for a group of elements for the touch event on the group name, once an
 * element in the group has been touched, all element focus handlers will be removed
 *
 * @private
 *
 * @param name The name of the group to create the touch handlers for
 * @param elements The elements that belong to the named group
 * @param stores The stores for the form instance
 *
 * @returns Function that when called will remove all focus handlers from the elements, if not removed by user action
 */
export function createTouchHandlers(name: string, elements: FormEl[], stores: FormulaStores) {
  /**
   * Internal map of element focus handlers
   */
  const elMap = new Map<FormEl, (event: Event) => void>();

  /**
   * Method to call when handlers should be destroyed, clean up handlers then remove the handlers
   */
  const destroy = () => {
    for (let [el, handler] of elMap) {
      el.removeEventListener('focus', handler);
    }
    elMap.clear();
  };

  // Set the current touched state to false
  stores.touched.update((state) => ({ ...state, [name]: false }));

  /**
   * Creates the instance of the handler for each element
   */
  function createElementHandler() {
    return () => {
      stores.touched.update((state) => ({ ...state, [name]: true }));
      destroy();
    };
  }

  for (let el of elements) {
    const handler = createElementHandler();
    el.addEventListener('focus', handler);
    elMap.set(el, handler);
  }

  return destroy;
}
