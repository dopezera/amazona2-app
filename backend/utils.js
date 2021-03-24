import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id, 
        name: user.name, 
        email: user.email, 
        isAdmin: user.isAdmin,
    }, 
    process.env.JWT_SECRET || 'somethingsecret', //boto esse || pq se rodar o sourcecode ele vai funcionar mesmo nao tendo .env com a config de JWT
    { 
        expiresIn: '30d', 
    } 
    );
};