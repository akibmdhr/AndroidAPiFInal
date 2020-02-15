const Users= require('../../models/users');
const mongoose= require('mongoose');
const DBTest= 'mongodb://127.0.0.1:27017/musictest';
beforeAll(async()=>{
    await mongoose.connect(DBTest,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
})


describe('Users Schema Test',()=>{
    it('should be able to add new user',async()=>{
        let user= await Users.create({'firstName':'akib','lastName':'manandhar','username':'akib111','password':'akib111'});
        expect(user.firstName).toMatch('akib');
        expect(user.lastName).toMatch('manandhar');
        expect(user.username).toMatch('akib111');
        expect(user.password).toMatch('akib111');
     
    })
    it('should be able to update user',async()=>{
        let user= await Users.findOne({'firstName':'akib','lastName':'manandhar','username':'akib111','password':'akib111'});
        user.firstName='sita';
        user.lastName='manandhar';
        user.username='sita111';
        user.password='sita111';
        let newuser= await user.save();
        expect(newuser.firstName).toBe('sita');
        expect(newuser.lastName).toBe('manandhar');
        expect(newuser.username).toBe('sita111');
        expect(newuser.password).toBe('sita111');
    })
    it('should be able to delete user',async()=>{
        let user= await Users.findOneAndDelete({'firstName':'sita'});
        expect(user.firstName).toBe('sita');
    })
})