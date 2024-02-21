function concatObj(obj1,obj2) {
    const newObj = {...obj1,...obj2};
    return newObj;
}