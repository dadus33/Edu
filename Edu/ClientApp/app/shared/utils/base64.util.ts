import { Base64 } from 'js-base64';

export class Base64Util {
    public static toBase64(str: string): string {
        return Base64.encode(str);
    }

    public static fromBase64(str: string): string {
        return Base64.decode(str);
    }

    public static toBase64Url(str: string): string {
        str = this.toBase64(str);
        return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
    }

    public static fromBase64Url(str: string): string {
        str = (str + '===').slice(0, str.length + (str.length % 4));
        str = str.replace(/-/g, '+').replace(/_/g, '/');
        return this.fromBase64(str);
    }
}