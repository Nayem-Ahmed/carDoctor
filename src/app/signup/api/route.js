import { mongodb } from "@/lib/mongodb";



export const POST = async (request) => {
    const newUser = await request.json();  // Parse the request body
    try {
        const db = await mongodb();
        const usersCollections = db.collection('users');
        const exist = await usersCollections.findOne({ email: newUser.email })
        if (exist) {
            return Response.json({ message: 'user exist' })

        }
        const res = await usersCollections.insertOne(newUser);
        // Send back the result
        return Response.json({ message: 'user created' })
    } catch (error) {
        return Response.json({ message: 'no users created' })
    }
};
