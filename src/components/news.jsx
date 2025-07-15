import React, { useState } from "react";

const NewsPage = () => {
  const [category, setCategory] = useState("All");

  const games = [
    { id: 1, title: "Halo Infinite", genre: "Action", studio: "343 Studios", imgSrc: "halo.png", 
        description: "A first-person shooter set in the Halo universe, Halo Infinite follows the journey of Master Chief as he battles the Covenant and other alien forces. This latest installment in the franchise introduces an open-world setting, expansive environments, and a compelling narrative about the struggle for humanity's survival. The game features breathtaking visuals, a new multiplayer mode, and various gameplay enhancements, delivering the most ambitious Halo title yet." },
    { id: 2, title: "Halo MCC", genre: "Action", studio: "343 Studios", imgSrc: "halomcc.png",
         description: "The Halo: Master Chief Collection brings together several classic titles from the Halo franchise, all remastered with updated graphics and enhanced features. Players can enjoy the campaigns and multiplayer modes of Halo: Combat Evolved, Halo 2, Halo 3, Halo 4, and even Halo: Reach. This collection serves as a perfect gateway for newcomers and longtime fans to experience the saga’s defining moments, both solo and with friends." },
    { id: 3, title: "Hollow Knight", genre: "Metroidvania", studio: "Team Cherry", imgSrc: "hollow.png",
         description: "Hollow Knight is an atmospheric and challenging Metroidvania platformer set in the ancient, decaying kingdom of Hallownest. As the mysterious protagonist, players explore intricate environments filled with danger, puzzles, and secrets. The game offers tight, responsive combat, platforming challenges, and a rich lore that gradually unravels as you journey deeper into the world, with each discovery adding to the eerie and captivating atmosphere." },
    { id: 4, title: "Dark Souls 3", genre: "Souls Like", studio: "From Software", imgSrc: "darksouls3.png",
         description: " Known for its punishing difficulty, Dark Souls 3 continues the series' legacy of intense, tactical combat, intricate level design, and deep lore. Set in the kingdom of Lothric, players battle nightmarish enemies and towering bosses while exploring interconnected areas that reward patience and strategy. With its complex world-building and punishing difficulty, Dark Souls 3 offers a challenge for gamers who enjoy high-risk, high-reward gameplay." },
    { id: 5, title: "Dead Space Remake", genre: "Horror", studio: "EA", imgSrc: "deadspace.png",
         description: " The Dead Space Remake is a reimagining of the 2008 survival horror classic, staying true to the terrifying atmosphere while enhancing graphics, sound, and gameplay mechanics. The story follows Isaac Clarke, an engineer aboard a mining ship, as he investigates a distress signal and uncovers an alien infestation. The remake builds upon the original's claustrophobic, tense environment with updated visuals and mechanics, making the horror experience even more visceral." },
    { id: 6, title: "Terraria", genre: "Creative", studio: "505 Studios", imgSrc: "terraria.png",
         description: "Terraria is a sandbox game that blends creativity and survival in a pixelated 2D world. Players can dig, build, explore, and fight enemies while customizing their environments with a wide variety of items and materials. With its ever-expanding content, random world generation, and cooperative multiplayer options, Terraria offers endless possibilities for players to craft their dream worlds or venture into the unknown for new adventures." },
    { id: 7, title: "Concord", genre: "Shooter", studio: "Sony Interactive", imgSrc: "concord.png",
         description: "Set in a futuristic world, Concord is a third-person shooter that combines fast-paced combat with tactical elements. Players take control of a highly skilled soldier fighting against an intergalactic threat. The game’s stunning visuals and dynamic combat systems bring futuristic weapons, vehicles, and environments to life. Whether fighting solo or with friends in multiplayer modes, Concord offers an intense and action-packed experience." },
    { id: 8, title: "Elden Ring", genre: "Souls Like", studio: "From Software", imgSrc: "eldenring.png",
         description: " From the makers of Dark Souls comes Elden Ring, an open-world RPG set in a vast, mystical world filled with mythical creatures, ancient ruins, and perilous landscapes. Players take on the role of a Tarnished, seeking the shattered Elden Ring to restore their world. The game combines the challenging combat and atmospheric storytelling of Dark Souls with the freedom of exploration and vast open environments, creating a rich and immersive experience." },
    { id: 9, title: "Black Ops 6", genre: "Shooter", studio: "Treyarch", imgSrc: "bo6.png",
         description: "Call of Duty: Black Ops 6 continues the tradition of fast-paced, action-packed first-person shooter gameplay, with a focus on futuristic warfare. Featuring an array of new weapons, gadgets, and explosive combat mechanics, the game’s multiplayer mode pushes the limits of modern warfare. Additionally, players can dive into a gripping campaign that challenges them to take down high-tech enemies in high-stakes global operations." },
    { id: 10, title: "Mario Party", genre: "RPG", studio: "Nintendo", imgSrc: "marioparty.png",
         description: "Mario Party is a fun-filled party game that brings together Mario and his friends for a series of wacky mini-games on various boards. Players can compete against one another in a variety of challenges, from simple luck-based games to more skillful activities. The multiplayer mode shines in Mario Party, allowing players to team up and have a great time, with an emphasis on fun, chaos, and friendly competition." },
    { id: 11, title: "Forza Horizon 4", genre: "Racing", studio: "Playground Games", imgSrc: "fh4.png",
         description: "Forza Horizon 4 is an open-world racing game set in a fictionalized version of Britain. The game features dynamic weather and seasons, where each season brings new challenges and opportunities to explore the world. Players can race, complete events, or simply cruise through the beautiful countryside in a wide range of cars. With its stunning graphics, deep customization options, and expansive world, Forza Horizon 4 offers a thrilling driving experience for all types of racing fans." },
    { id: 12, title: "Forza Horizon 5", genre: "Racing", studio: "Playground Games", imgSrc: "fh5.png",
         description: "Set in the vibrant landscapes of Mexico, Forza Horizon 5 takes the open-world racing formula to new heights. With improved graphics, new vehicles, and even more diverse environments, the game offers players the chance to race through deserts, jungles, and cities. The game features dynamic weather, seasonal changes, and a variety of races, making it an unforgettable experience for fans of both racing and exploration." },
    { id: 13, title: "Uncharted 4", genre: "Adventure", studio: "Naughty Dog", imgSrc: "Uncharted4.png",
         description: "Uncharted 4: A Thief’s End is an action-adventure game that follows Nathan Drake, a retired treasure hunter, on his final adventure. The game blends platforming, puzzle-solving, and cinematic action sequences as players traverse exotic locations in search of ancient artifacts. With stunning visuals, gripping storytelling, and refined gameplay mechanics, Uncharted 4 is a fitting conclusion to Nathan Drake's saga." },
    { id: 14, title: "God Of War (2016)", genre: "Action", studio: "Santa Monica Studio", imgSrc: "godofwar.png",
         description: "God of War redefines the action-adventure genre by reimagining Kratos as a father figure in a world inspired by Norse mythology. The game’s compelling narrative explores Kratos’ relationship with his son, Atreus, while engaging players in brutal combat and puzzle-solving. Featuring a seamless, camera-driven storytelling experience and deep character development, God of War (2016) is a must-play for fans of the series and newcomers alike." },
    { id: 15, title: "Bloodborne", genre: "Souls Like", studio: "From Software", imgSrc: "bloodborne.png",
         description: "Bloodborne is a gothic horror action RPG set in the cursed city of Yharnam, where a plague has transformed citizens into terrifying creatures. As a Hunter, players must navigate nightmarish environments, battle monstrous foes, and uncover the secrets of the ancient city. With fast-paced, aggressive combat and an eerie atmosphere, Bloodborne offers an intense and thrilling experience for fans of dark fantasy and challenging gameplay." },
    { id: 16, title: "Sekiro", genre: "Souls Like", studio: "From Software", imgSrc: "sekiro.png",
         description: " Shadows Die Twice takes players into a war-torn feudal Japan, where they control a skilled shinobi named Wolf on a mission of vengeance and rescue. The game emphasizes precision, stealth, and combat, with an innovative posture system and intense boss battles. Unlike previous From Software titles, Sekiro places more emphasis on skill-based action rather than RPG mechanics, creating a tense and rewarding experience for players seeking a challenge." },
  ];

  const filteredGames =
    category === "All"
      ? games
      : games.filter((game) => game.genre === category);

  return (
    <div className="min-h-screen bg-white text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">Gaming News</h1>

        {/* Category Filter */}
        <center>
        <div className="flex justify-center gap-10 mb-12">
          {["All", "Action", "Souls Like", "Racing", "Shooter", "Adventure", "RPG", "Metroidvania", "Creative", "Horror"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 hover:bg-blue-500 hover:text-white"
              } transition-all`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        </center>
        
        {/* Game Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition"
            >
              <img
                src={game.imgSrc}
                alt={game.title}
                className="w-full h-20 object-cover rounded-md mb-2" // size of the image
              />
              <h2 className="text-xl font-bold text-black mb-2">{game.title}</h2>
              <p className="text-sm text-black mb-2">Genre: {game.genre}</p>
              <p className="text-sm text-black mb-4">Studio: {game.studio}</p>
              <p className="text-sm text-black mb-4">{game.description}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
