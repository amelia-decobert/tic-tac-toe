# Picking a key 

When you render a list, React stores some information about each rendered list item.
When you update a list, React needs to determine what has changed. You could have added, removed, re-arranged, or updated the list’s items.

When a list is re-rendered, React takes each list item’s key and searches the previous list’s items for a matching key.
If the current list has a key that didn’t exist before, React creates a component.
If the current list is missing a key that existed in the previous list, React destroys the previous component.
If two keys match, the corresponding component is moved.

Keys tell React about the identity of each component, which allows React to maintain state between re-renders.
If a component’s key changes, the component will be destroyed and re-created with a new state.

key is a special and reserved property in React.
When an element is created, React extracts the key property and stores the key directly on the returned element.
Even though key may look like it is passed as props, React automatically uses key to decide which components to update.
There’s no way for a component to ask what key its parent specified.

**It’s strongly recommended that you assign proper keys whenever you build dynamic lists.**
If you don’t have an appropriate key, you may want to consider restructuring your data so that you do.

If no key is specified, React will report an error and use the array index as a key by default.
Using the array index as a key is problematic when trying to re-order a list’s items or inserting/removing list items.
Explicitly passing `key={i}` silences the error but has the same problems as array indices and is not recommended in most cases.

Keys do not need to be globally unique; they only need to be unique between components and their siblings.

