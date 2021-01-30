function matek(param) {
    if (param === undefined) return 0;
    if (typeof param === "string") return 1;
    if (Number.isInteger(param)){
        if (param % 2 === 0){
            param = param ** param;
            return param;
        }
        else {
            param = (param-1) ** (param-1);
            return param;
        }

    } else {
        return null;
    }

}

