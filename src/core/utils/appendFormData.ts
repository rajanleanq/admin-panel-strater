export const appendFormData = (obj: Record<string, any>): FormData => {
    const formData = new FormData();
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            formData.append(key, obj[key]);
        }
    }
    return formData;
};