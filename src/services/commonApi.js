import axios from "axios";

const commonApi = async (reqUrl, reqMethod, reqHeader, reqBody) => {
    const config = {
        url: reqUrl,
        method: reqMethod,
        headers: reqHeader ? reqHeader : { 'Content-Type': 'application/json' },
        data: reqBody
    }
    try {
        const res = await axios(config);
        return res
    } catch (err) {
        return err.response || { status: 500, data: { message: "Unknown error" } }
    }
}

export default commonApi;
