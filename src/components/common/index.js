// We're doing this to just import and export everything in each of these
// just to reduce the number of import statements in components that use these
// common components.
// If you do this, you must change, for example, export default Button to export { Button } 
// in each common component.
// I'm not sure it's worth it because anytime we add a common components, we have to remember to 
// add it to this index, but whatever - it's what the instructor is showing.
export * from './Button';
export * from './Header';
export * from './Card';
export * from './CardSection';
