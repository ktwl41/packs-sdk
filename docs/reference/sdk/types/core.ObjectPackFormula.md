---
nav: "ObjectPackFormula"
note: "This file is autogenerated from TypeScript definitions. Make edits to the comments in the TypeScript file and then run `make docs` to regenerate this file."
---
# Type alias: ObjectPackFormula<ParamDefsT, SchemaT\>

[core](../modules/core.md).ObjectPackFormula

Ƭ **ObjectPackFormula**<`ParamDefsT`, `SchemaT`\>: `Omit`<[`BaseFormula`](core.BaseFormula.md)<`ParamDefsT`, [`SchemaType`](core.SchemaType.md)<`SchemaT`\>\>, ``"execute"``\> & { `schema?`: `SchemaT` ; `execute`: (`params`: [`ParamValues`](core.ParamValues.md)<`ParamDefsT`\>, `context`: [`ExecutionContext`](../interfaces/core.ExecutionContext.md)) => `object` \| `Promise`<`object`\>  }

A pack formula that returns a JavaScript object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ParamDefsT` | extends [`ParamDefs`](core.ParamDefs.md) |
| `SchemaT` | extends [`Schema`](core.Schema.md) |
