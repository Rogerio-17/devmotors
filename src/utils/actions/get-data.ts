export async function getDataHome() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}-72d44c50-1fa7-11ef-b557-3b10f8bf5f2b/objects/665a6265b6cce150ff098aa5?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`
        )

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json()
    } catch (err) {
        throw new Error('Failed to fetch data')
    }
}
