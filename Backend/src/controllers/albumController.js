import { v2 as cloudinary } from 'cloudinary';
import albumModel from '../models/songModel.js';

const addAlbum = async (req, res) => {
    try {
        const name = req.body.name;
        const dsec = req.body.desc;
        const bgColour = req.body.bgColour;
        const imageFile = req.files;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        
        const albumData = {
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url
            
        }

        const song = albumModel(albumData);
        await song.save();

        res.json({ success: true, message: "Album Added" })

    } catch (error) {

        res.json({ success: false })

    }
}

const listAlbum = async (req, res) => {

    try {

        const allAlbums = await albumModel.find({});
        res.json({ success: true, songs: allSongs });

    }
    catch (error) {

        res.json({ success: false });

    }

}

const removeAlbum = async (req, res) => {

    try {
        await albumModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Song removed" });

    } 
    catch (error) {
        res.json({ success: false });
    }

}

export { addAlbum, listAlbum, removeAlbum }