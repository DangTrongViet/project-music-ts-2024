import { Request, Response } from "express";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";
import { convertToSLug } from "../../helpers/convertToSlug";


// [GET] /search/:type

export const result = async (req: Request, res: Response) => {
    const type = req.params.type;

    
    const keyword : string = `${req.query.keyword}`;
    
    let newSongs = [];

    if(keyword){
        const keywordRegex = new RegExp(keyword, "i");

        // Tạo ra slug không dấu, có thêm dấu - ngăn cách 
        const stringSlug = convertToSLug(keyword);
        const stringSlugRexgex = new RegExp(stringSlug, "i");
        
        
        const songs = await Song.find({
         $or: [{
            title: keywordRegex
         },{
            slug: stringSlugRexgex
         }]
        });

        for (const item of songs) {
            const infoSinger = await Singer.findOne({
                _id: item.singerId
            });

            item["infoSinger"] = infoSinger;
            newSongs.push({
                id: item.id,
                title: item.title,
                avatar: item.avatar,
                like: item.like,
                slug: item.slug,
                infoSinger: {
                    fullName: infoSinger.fullName
                }
            })
        }
        
    }

    switch (type){
        case "result":
            res.render("client/pages/search/result",{
                pageTitle: `Kết quả: ${keyword}`,
                keyword: keyword,
                songs: newSongs
            });
            break;
        case "suggest":
            res.json({
                code: 200,
                message: "Thành công",
                songs: newSongs
            });
            break;
        default:
            break;
    }
}