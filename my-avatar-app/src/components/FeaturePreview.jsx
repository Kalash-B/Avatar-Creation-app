import Avatar from "avataaars";

export default function FeaturePreview({ type, value, selected, onClick }) {
  return (
    <div
      className={`cursor-pointer p-1 border rounded-lg ${selected ? "border-blue-500" : "border-gray-300"}`}
      onClick={() => onClick(value)}
    >
      <Avatar
        style={{ width: "120px", height: "120px" }}
        avatarStyle={ type === "avatarStyle" ? value : "Circle" }
        topType={type === "topType" ? value : "NoHair"}
        accessoriesType={type === "accessoriesType" ? value : "Blank"}
        hairColor={type === "hairColor" ? value : "BrownDark"}
        facialHairType={type === "facialHairType" ? value : "Blank"}
        clotheType={type === "clotheType" ? value : "ShirtCrewNeck"}
        eyeType={type === "eyeType" ? value : "Default"}
        eyebrowType={type === "eyebrowType" ? value : "Default"}
        mouthType={type === "mouthType" ? value : "Smile"}
        skinColor={type === "skinColor" ? value : "Light"}
      />
    </div>
  );
}
