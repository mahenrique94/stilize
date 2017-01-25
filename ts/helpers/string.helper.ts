class StringHelper {

    public static trimAll(string : string) : string {
        return string.replace(/\s/g, "");
    } 

    public static trimLeft(string : string) : string {
        return string.replace(/^\s+/, "");
    }

    public static trimLeftRight(string : string) : string {
        return string.replace(/^\s+|\s+$/g, "");
    }

    public static trimRight(string : string) : string {
        return string.replace(/\s+$/, "");
    }

}