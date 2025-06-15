import { useState } from "react";
import { toast } from "react-toastify";

const SkillsSection = ({ skills, setSkills }) => {
    const [skill, setSkill] = useState("");

    const addSkill = () => {
        if (skill && !skills.includes(skill)) {
            setSkills([...skills, skill]);
            setSkill("");
        } else if (skills.includes(skill)) {
            toast.warning("Skill Already Used!!", { position: "top-left", autoClose: 1000 })
        }
    };

    const removeSkill = (skillToRemove) => {
        setSkills(skills.filter((s) => s !== skillToRemove));
    };

    return (
        <>
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    placeholder="Add your skills here`"
                    className="w-full px-4 py-2 input input-bordered"
                />
                <button
                    onClick={addSkill}
                    className="btn btn-outline"
                >
                    Add
                </button>
            </div>

            <div className="mt-4 mb-4">
                {skills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {skills.map((s, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-gray-200 text-slate-700 px-3 py-1 rounded-full"
                            >
                                {s}
                                <button
                                    onClick={() => removeSkill(s)}
                                    className="text-slate-700 hover:text-red-500"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No skills added yet.</p>
                )}
            </div>

        </>

    );
};

export default SkillsSection;
