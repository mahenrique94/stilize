class StringFunction {

    public static trimAll(string : string) {
        return string.replace(/\s/g, "");
    } 

    public static trimLeft(string : string) {
        return string.replace(/^\s+/, "");
    }

    public static trimLeftRight(string : string) {
        return string.replace(/^\s+|\s+$/g, "");
    }

    public static trimRight(string : string) {
        return string.replace(/\s+$/, "");
    }

}