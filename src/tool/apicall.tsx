// ApiComponent.ts
import axios, { AxiosResponse } from "axios";

interface MyData {
    _id: string;
    category: string;
    date: string;
    description: string;
    name: string;
    title: string;
    uuid: string;
}

const fetchData = async (): Promise<MyData> => {
    try {
        const response: AxiosResponse<{ result: MyData[] }> = await axios.get(
            "http://52.79.236.16:9000/seorowiki/99423490-5fbb-4832-9278-8a040168fc4c"
        );

        const data = response.data.result;

        if (Array.isArray(data) && data.length > 0) {
            return data[0]; // 배열의 첫 번째 요소 반환
        } else {
            throw new Error("Invalid data structure");
        }
    } catch (error) {
        throw error;
    }
};

export default fetchData;
