import camelCase from "lodash/camelCase";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import transform from "lodash/transform";

const camelize = (obj: Record<string, unknown>) =>
  transform(obj, (acc: Record<string, unknown>, value, key, target) => {
    const camelKey = isArray(target) ? String(key) : camelCase(String(key));

    acc[camelKey] = isObject(value)
      ? camelize(value as Record<string, unknown>)
      : value;
  });

export default camelize;
