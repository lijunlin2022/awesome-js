/**
 * 深拷贝
 * @param {Object} obj 
 * @returns 
 */
function deepClone(obj) {
  if (typeof obj !== "object" || obj == null) {
    // obj 是 null, 或者不是对象和数组, 直接返回
    return obj;
  }

  // 初始化返回结果
  let result = null;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (let key in obj) {
    // 保证 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

const obj1 = {
  age: 20,
  name: "XXX",
  address: {
    city: "beijing"
  },
  arr: ["a", "b", "c"]
};

const obj2 = deepClone(obj1);

obj2.address.city = "shanghai";
obj2.arr[0] = "A";

console.log(obj2);
