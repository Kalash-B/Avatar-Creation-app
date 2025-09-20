import { useState, useContext } from "react";
import Avatar from "avataaars";
import { AvatarContext } from "../context/AvatarContext";
import FeaturePreview from "../components/FeaturePreview";

export default function AvatarBuilder() {
  const [bgMode, setBgMode] = useState("dark");
  const [activeCategory, setActiveCategory] = useState("Hair"); // category toggle
  const [avatarStyle, setAvatarStyle] = useState("Circle");
  const [topType, setTopType] = useState("ShortHairShortFlat");
  const [accessoriesType, setAccessoriesType] = useState("Blank");
  const [hairColor, setHairColor] = useState("BrownDark");
  const [facialHairType, setFacialHairType] = useState("Blank");
  const [clotheType, setClotheType] = useState("ShirtCrewNeck");
  const [eyeType, setEyeType] = useState("Default");
  const [eyebrowType, setEyebrowType] = useState("Default");
  const [mouthType, setMouthType] = useState("Smile");
  const [skinColor, setSkinColor] = useState("Light");

  const { setAvatarConfig } = useContext(AvatarContext);

  const handleSave = () => {
    setAvatarConfig({
      avatarStyle, topType, accessoriesType, hairColor, facialHairType,
      clotheType, eyeType, eyebrowType, mouthType, skinColor
    });
    alert("✅ Avatar saved!");
  };

  // Categories and their features
  const categories = {
    avatarStyle: [
      {
        label: "Avatar Style",
        value: avatarStyle,
        setter: setAvatarStyle,
        options: ["Circle", "Transparent"],
        type: "avatarStyle"
      }
    ],
    Hair: [
      {
        label: "Top",
        value: topType,
        setter: setTopType,
        options: [
          "NoHair", "Eyepatch", "Hat", "Hijab", "Turban",
          "WinterHat1", "WinterHat2", "WinterHat3", "WinterHat4",
          "LongHairBigHair", "LongHairBob", "LongHairBun", "LongHairCurly",
          "LongHairCurvy", "LongHairDreads", "LongHairFrida", "LongHairFro",
          "LongHairFroBand", "LongHairNotTooLong", "LongHairShavedSides",
          "LongHairMiaWallace", "LongHairStraight", "LongHairStraight2",
          "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02",
          "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly",
          "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved",
          "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"
        ],
        type: "topType"
      },
      {
        label: "Hair Color",
        value: hairColor,
        setter: setHairColor,
        options: [
          "Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark",
          "PastelPink", "Blue", "Platinum", "Red", "SilverGray"
        ],
        type: "hairColor"
      }
    ],

    Face: [
      {
        label: "Eyes",
        value: eyeType,
        setter: setEyeType,
        options: [
          "Close", "Cry", "Default", "Dizzy", "EyeRoll",
          "Happy", "Hearts", "Side", "Squint", "Surprised",
          "Wink", "WinkWacky"
        ],
        type: "eyeType"
      },
      {
        label: "Eyebrows",
        value: eyebrowType,
        setter: setEyebrowType,
        options: [
          "Angry", "AngryNatural", "Default", "DefaultNatural",
          "FlatNatural", "RaisedExcited", "RaisedExcitedNatural",
          "SadConcerned", "SadConcernedNatural", "UnibrowNatural",
          "UpDown", "UpDownNatural"
        ],
        type: "eyebrowType"
      },
      {
        label: "Mouth",
        value: mouthType,
        setter: setMouthType,
        options: [
          "Concerned", "Default", "Disbelief", "Eating", "Grimace",
          "Sad", "ScreamOpen", "Serious", "Smile", "Tongue",
          "Twinkle", "Vomit"
        ],
        type: "mouthType"
      },
      {
        label: "Facial Hair",
        value: facialHairType,
        setter: setFacialHairType,
        options: [
          "Blank", "BeardMedium", "BeardLight", "BeardMajestic",
          "MoustacheFancy", "MoustacheMagnum"
        ],
        type: "facialHairType"
      }
    ],

    Accessories: [
      {
        label: "Accessories",
        value: accessoriesType,
        setter: setAccessoriesType,
        options: [
          "Blank", "Kurt", "Prescription01", "Prescription02",
          "Round", "Sunglasses", "Wayfarers"
        ],
        type: "accessoriesType"
      }
    ],

    Clothes: [
      {
        label: "Clothes",
        value: clotheType,
        setter: setClotheType,
        options: [
          "BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt",
          "Hoodie", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"
        ],
        type: "clotheType"
      }
    ],

    Skin: [
      {
        label: "Skin",
        value: skinColor,
        setter: setSkinColor,
        options: [
          "Tanned", "Yellow", "Pale", "Light", "Brown",
          "DarkBrown", "Black"
        ],
        type: "skinColor"
      }
    ]
  };


  const backgroundGradient =
    bgMode === "dark"
      ? "radial-gradient(circle, #969b9c 0%, #2b3a40 100%)"
      : "radial-gradient(circle, #f0f0f0 0%, #d9d9d9 100%)";

  return (
    <div className="bg-background w-full font-display items-center justify-center h-screen text-gray-800 min-h-fit flex flex-col">

      <main className="flex-2 flex items-center justify-around gap-4 px-4">
        {/* Left Sidebar - Categories */}
        <aside className="w-[200px] flex flex-col gap-4 justify-center items-center py-4">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-28 h-16 border mx-20 rounded-lg flex items-center justify-center font-bold text-sm transition-all
                ${activeCategory === cat ? "bg-primary-dark text-white" : "bg-white text-gray-800 shadow-md"}`}
            >
              {cat}
            </button>
          ))}
        </aside>

        {/* Main Avatar */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold gradient-text mb-4">Build Your Avatar</h2>
          {/* Background Mode Toggle */}
          <div className="w-full flex justify-center p-4">
            <button
              onClick={() => setBgMode(bgMode === "dark" ? "light" : "dark")}
              className="px-4 py-2 text-sm font-bold text-white gradient-bg rounded-full shadow-soft-lg hover:shadow-xl transition-all"
            >
              {bgMode === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <div className="relative w-full aspect-square max-w-xl rounded-xl shadow-soft-lg flex justify-center items-center"
            style={{ background: backgroundGradient }}>
            <Avatar
              style={{ width: "480px", height: "480px" }} // increased size
              avatarStyle={avatarStyle}
              topType={topType}
              accessoriesType={accessoriesType}
              hairColor={hairColor}
              facialHairType={facialHairType}
              clotheType={clotheType}
              eyeType={eyeType}
              eyebrowType={eyebrowType}
              mouthType={mouthType}
              skinColor={skinColor}
            />
          </div>
          {/* Save Button */}
          <button
            onClick={handleSave}
            className="mt-5 w-1/2 py-3 text-sm font-bold text-white gradient-bg rounded-full shadow-soft-lg hover:shadow-xl transition-all"
          >
            Save Avatar
          </button>
        </div>

        {/* Right Sidebar - Features */}
        <aside className="w-[500px] h-fit bg-white border border-gray-200 rounded-lg p-4 flex flex-col overflow-y-auto space-y-6">
          {categories[activeCategory].map((feature) => (
            <div key={feature.label}>
              <label className="block font-bold text-sm mb-2">{feature.label}</label>
              <div className="flex gap-2 overflow-x-auto">
                {feature.options.map((opt) => (
                  <FeaturePreview
                    key={opt}
                    type={feature.type}
                    value={opt}
                    selected={feature.value === opt}
                    onClick={feature.setter}
                  />
                ))}
              </div>
            </div>
          ))}

        </aside>
      </main>
    </div>
  );
}
