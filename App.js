/****
 *
 *
 *
 * <div id="parent">
 *      <divid = "child">
 *         <h1>This is h1 tag </h1>
 *  *       <h2>This is h2 tag </h2>
 *      </div>
 * </div>
 *
 * <div id="parent">
 *      <divid = "child">
 *         <h1>This is h1 tag </h1>
 *  *       <h2>This is h2 tag </h2>
 *      </div>
 * </div>
 * React.createElement = Its creating a object but not html  => HTML(Which browser will understand)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);

root.render(parent);
