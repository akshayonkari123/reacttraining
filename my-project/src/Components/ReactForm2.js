
import React, { useState } from "react";
import "./ReactForm.css";

function ReactForm2() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState(null);
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!firstName) newErrors.firstName = "First Name is required";
        if (!lastName) newErrors.lastName = "Last Name is required";
        if (!email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
        if (!contact) newErrors.contact = "Contact number is required";
        else if (!/^\d{10}$/.test(contact)) newErrors.contact = "Contact number is invalid";
        if (!resume) newErrors.resume = "Resume is required";
        if (!url) newErrors.url = "URL is required";
        else if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(url)) newErrors.url = "URL is invalid";
        if (!about) newErrors.about = "About section is required";
        if (!selectedOption) newErrors.selectedOption = "Please select an option";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(
                firstName,
                lastName,
                email,
                contact,
                gender,
                selectedOption,
                subjects,
                resume,
                url,
                about
            );
            // Add your form submission logic here
        }
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume(null);
        setUrl("");
        setSelectedOption("");
        setAbout("");
        setErrors({});
    };

    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name*</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter First Name"
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}

                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Last Name"
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}

                    <label htmlFor="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                    {errors.email && <span className="error">{errors.email}</span>}

                    <label htmlFor="tel">Contact*</label>
                    <input
                        type="number"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Mobile number"
                    />
                    {errors.contact && <span className="error">{errors.contact}</span>}

                    <label htmlFor="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                    /> Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) => setGender(e.target.value)}
                    /> Other

                    <label htmlFor="lang">Your best Subject</label>
                    <input
                        type="checkbox"
                        name="lang"
                        id="english"
                        checked={subjects.english}
                        onChange={() => handleSubjectChange("english")}
                    /> English
                    <input
                        type="checkbox"
                        name="lang"
                        id="maths"
                        checked={subjects.maths}
                        onChange={() => handleSubjectChange("maths")}
                    /> Maths
                    <input
                        type="checkbox"
                        name="lang"
                        id="physics"
                        checked={subjects.physics}
                        onChange={() => handleSubjectChange("physics")}
                    /> Physics
                    <input
                        type="checkbox"
                        name="lang"
                        id="bio"
                        checked={subjects.bio}
                        onChange={() => handleSubjectChange("bio")}
                    /> Bio

                    <label htmlFor="file">Upload Resume*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => setResume(e.target.files[0])}
                        placeholder="Upload your resume"
                    />
                    {errors.resume && <span className="error">{errors.resume}</span>}

                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL"
                    />
                    {errors.url && <span className="error">{errors.url}</span>}

                    <label>Select your choice</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="" disabled>
                            Select your Ans
                        </option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="t">MongoDB</option>
                            <option value="p">PostgreSQL</option>
                        </optgroup>
                    </select>
                    {errors.selectedOption && <span className="error">{errors.selectedOption}</span>}

                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="About yourself"
                    ></textarea>
                    {errors.about && <span className="error">{errors.about}</span>}

                    <button type="reset" onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default ReactForm2;