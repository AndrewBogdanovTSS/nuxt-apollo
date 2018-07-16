declare module '*.vue' {
  import Vue from 'vue'
  const _default: Vue
  export default _default
}

/*// webpack.d.ts
declare module "*.qql" {
  const content: any;
  export default content;
}

// Been also trying to declare "*.graphql" support as such
declare module "*.graphql" {
  const content: any;
  export default content;
}*/

declare module '*.graphql' {
  import {DocumentNode} from 'graphql';

  const value: DocumentNode;
  export = value;
}