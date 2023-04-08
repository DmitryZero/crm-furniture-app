type Result<T> = {result: true, data: T} | {result: false, error: string};

export default Result;