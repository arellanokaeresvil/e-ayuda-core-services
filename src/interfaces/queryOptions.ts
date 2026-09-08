interface QueryOptions{
        search?: string,
        page?: number,
        limit?: number,
        sortBy?: string,
        orderBy?: "ASC" | "DESC"

}

export default QueryOptions;