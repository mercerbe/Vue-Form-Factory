import ComponentRegister from "./plugins/ComponentRegister";

const components = {};

const plugin = (Vue, opts = { prefix: "vff" }) => {
  const { prefix } = opts;
  const compNames = Object.keys(components);
  for (let i = 0; i < compNames.length; i += 1) {
    const name = compNames[i];
    if (name !== "vff" && name !== "vff")
      Vue.component(`${prefix}${name}`, components[name]);
    else Vue.component(name, components[name]);
  }

  Vue.use(ComponentRegister);
};

export default plugin;

const version = "__VERSION__";

export { version };
