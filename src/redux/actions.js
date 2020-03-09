export const UPLOAD_DATA = "UPLOAD_DATA";

export function uploadData(data) {
    return {
        type: UPLOAD_DATA,
        data: data
    }
}