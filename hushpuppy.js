var config = {
    Lifespan: 5,
    LitterValues: {
        LitterOnTheLeft: false,
        LitterOnTheBottom: true,
        Width: "250px",
        SideMargin: "10%",
        TopBottomMargin: "10%",
    },
    Styles: [
        {
            Name: "Base",
            BackgroundColor: "#43d5dc",
            Color: "white",
            Lifespan: "",
            BorderRadius: "0",
            TopBottomPadding: "",
            LeftRightPadding: "",
            Animation: {
                Enter: "ClimbUp",
                EnterDuration: ".8",
                Exit: "FallDown",
                ExitDuration: "2"
            },
            ImageSrc: [
                "<i class='far fa-check-circle fa-lg'></i>",
            ],
        },
        {
            Name: "Success",
            BackgroundColor: "#83a148",
            Color: "white",
            Lifespan: "",
            Animation: {
                Enter: "ClimbUp",
                EnterDuration: ".8",
                Exit: "FallDown",
                ExitDuration: "2"
            },
            ImageSrc: ["<i class='fas fa-check-circle fa-lg'></i>",],
        },
        {
            Name: "Warning",
            BackgroundColor: "#f2b846",
            Color: "white",
            Lifespan: "",
            Animation: {
                Enter: "ClimbUp",
                EnterDuration: ".8",
                Exit: "FallDown",
                ExitDuration: "2"
            },
            ImageSrc: ["<i class='fas fa-exclamation-triangle fa-lg'></i>",],
        },
        {
            Name: "Error",
            BackgroundColor: "#d1192a",
            Color: "white",
            Lifespan: "",
            Animation: {
                Enter: "ClimbUp",
                EnterDuration: ".8",
                Exit: "FallDown",
                ExitDuration: "2"
            },
            ImageSrc: ["<i class='fas fa-siren-on fa-lg'></i>",],
        },
        {
            Name: "Loader",
            BackgroundColor: "#43d5dc",
            Color: "white",
            Lifespan: "1000",
            Animation: {
                Enter: "ClimbUp",
                EnterDuration: ".8",
                Exit: "FallDown",
                ExitDuration: "2"
            },
            ImageSrc: "<i class='fad fa-spinner-third fa-lg fa-spin fa-pulse'></i>",
        },
    ],
}

//Tool that checks to make sure values exist for the default styles
function StyleValidator() {
    let reqStyles = [{
        Name: "Base",
        BackgroundColor: "#43d5dc",
        Color: "white",
        Animation: {
            Enter: "ClimbUp",
            EnterDuration: "1",
            Exit: "FallDown",
            ExitDuration: "1"
        },
        ImageSrc: "",
    },
    {
        Name: "Success",
        BackgroundColor: "#83a148",
        Color: "white",
        Animation: {
            Enter: "ClimbUp",
            EnterDuration: "1",
            Exit: "FallDown",
            ExitDuration: "1"
        },
        ImageSrc: "",
    },
    {
        Name: "Warning",
        BackgroundColor: "#f2b846",
        Color: "white",
        Animation: {
            Enter: "ClimbUp",
            EnterDuration: "1",
            Exit: "FallDown",
            ExitDuration: "1"
        },
        ImageSrc: "",
    },
    {
        Name: "Error",
        BackgroundColor: "#d1192a",
        Color: "white",
        Animation: {
            Enter: "ClimbUp",
            EnterDuration: "1",
            Exit: "FallDown",
            ExitDuration: "1"
        },
        ImageSrc: "",
    },
    {
        Name: "Loader",
        BackgroundColor: "#43d5dc",
        Color: "white",
        Animation: {
            Enter: "ClimbUp",
            EnterDuration: "1",
            Exit: "FallDown",
            ExitDuration: "1"
        },
        ImageSrc: "<i class='fad fa-spinner-third fa-lg fa-spin fa-pulse'></i>",
    }];
    reqStyles.map(function (req) {
        let toVerify = config.Styles.find(m => m.Name == req.Name);
        if (toVerify == null) {
            config.Styles.push(req);
        } else {
            if (toVerify.Color == "" || toVerify.Color == null) toVerify.Color = req.Color;
            if (toVerify.BackgroundColor == "" || toVerify.BackgroundColor == null) toVerify.BackgroundColor = req.BackgroundColor;
            if (toVerify.Animation == "" || toVerify.Animation == null) toVerify.Animation = req.Animation;
        }
    })
}

//Create the style sheet for tool based off of the set values
var hushPuppyStyle;
function BuildStyle() {
    StyleValidator();
    hushPuppyStyle = document.createElement('style');
    hushPuppyStyle.type = 'text/css';
    let topBottom = config.LitterValues.LitterOnTheBottom ? "bottom" : "top";
    let leftRight = config.LitterValues.LitterOnTheLeft ? "left" : "right";
    hushPuppyStyle.innerHTML = " \
        .litter { \
            width: " + config.LitterValues.Width + "; \
            position: fixed; \
            " + leftRight + ":" + config.LitterValues.SideMargin + "; \
            " + topBottom + ":" + config.LitterValues.TopBottomMargin + "; \
            z-index: 1000; \
        } \
        .puppy { \
            color: " + config.Styles.find(s => s.Name == "Base").Color + "; \
            background-color: " + config.Styles.find(s => s.Name == "Base").BackgroundColor + "; \
            margin-bottom: 5px; \
            position: relative; \
            text-align: center; \
            padding: 4px 7px; \
            border-radius: 5px; \
            animation-name: " + config.Styles.find(s => s.Name == "Base").Animation + "; \
            animation-duration: " + config.Lifespan + "s; \
            -webkit-box-shadow: 1px 1px 3px #979797; \
            box-shadow: 1px 1px 3px #979797; \
            transition: 1s; \
        } \
        .puppy .media { \
            max-width: 30%; \
            max-height: 80%; \
            position: absolute; \
            display: block; \
            left: 4%; \
            top: 20%; \
        } \
        .hushControl { \
            position: absolute; \
            display: block; \
            right: 1%; \
            top: 5%; \
        } \
        @keyframes enterAnimationFadeIn { \
            0% { transform: translateY(0); opacity: 0; } \
            100% { transform: translateY(0); opacity: 1; } \
        } \
        @keyframes enterAnimationClimbUp { \
            0% { transform: translateY(100vw); opacity: 0; } \
            100% { transform: translateY(0); opacity: 1; } \
        } \
        @keyframes enterAnimationSlideFromRight { \
            0% { transform: translateX(50vw); opacity: 0; } \
            100% { transform: translateX(0); opacity: 1; } \
        } \
        @keyframes enterAnimationSlideFromLeft { \
            0% { transform: translateX(-50vw); opacity: 0; } \
            100% { transform: translateX(0); opacity: 1; } \
        } \
        @keyframes enterAnimationPopIn { \
            0% { transform: scale(0); opacity: 0; } \
            80% { transform: scale(1.1); opacity: 1; } \
            100% { transform: scale(1); opacity: 1; } \
        } \
        @keyframes exitAnimationFadeOut{ \
            0% { opacity: 1; } \
            100% { opacity: 0; } \
        } \
        @keyframes exitAnimationFallDown { \
            0% { transform: rotate(0); } \
            5% { transform: rotate(2deg); } \
            10% { transform: rotate(-2deg); } \
            15% { transform: rotate(2deg); } \
            20% { transform: rotate(-2deg); } \
            25% { transform: rotate(2deg); } \
            30% { opacity: 1; transform: rotate(0) translateY(0); }\
            100% { opacity: 0; transform: rotate(0) translateY(100vw); } \
        } \
        @keyframes exitAnimationSlideRight { \
            0% { transform: rotate(0); } \
            5% { transform: rotate(2deg); } \
            10% { transform: rotate(-2deg); } \
            15% { transform: rotate(2deg); } \
            20% { transform: rotate(-2deg); } \
            25% { transform: rotate(2deg); } \
            30% { transform: rotate(0) translateX(0); } \
            51% { opacity: 1; } \
            65% { opacity: 0; } \
            100% { transform: translateX(100vw); } \
        } \
        @keyframes exitAnimationSlideUp { \
            0% { transform: rotate(0); } \
            5% { transform: rotate(2deg); } \
            10% { transform: rotate(-2deg); } \
            15% { transform: rotate(2deg); } \
            20% { transform: rotate(-2deg); } \
            25% { transform: rotate(2deg); } \
            30% { opacity: 1; transform: rotate(0) translateY(0); }\
            100% { opacity: 0; transform: rotate(0) translateY(-100vw); } \
        } \
        @keyframes exitAnimationPopOut { \
            0% { transform: scale(1); opacity: 1; } \
            20% { transform: scale(1.1); opacity: 1; } \
            100% { transform: scale(0); opacity: 0; } \
        } \
    ";
    config.Styles.map(s => hushPuppyStyle.innerHTML += s.Name == "Base" ? "" : "." + s.Name + " { color: " + s.Color + "; background-color: " + s.BackgroundColor + "; padding: " + s.TopBottomPadding + "px " + s.LeftRightPadding + "px; border-radius: " + s.BorderRadius + "px ; animation - name: " + s.Animation.Enter + "; animation - duration: " + s.Animation.EnterDuration.toString() + "s;} ");
    document.getElementsByTagName('head')[0].appendChild(hushPuppyStyle);
}

//Main tool for creating a puppy, returns created puppy
function puppy(message, alertType) {
    if (alertType == "" || alertType == null || alertType === undefined) alertType = "Base";

    //Check that the basic stuff is setup already
    let litter = InitializationCheck();

    let mediaOb = "";
    let style = config.Styles.find(s => s.Name == alertType);
    //Check if there is media
    if (style.ImageSrc != "") {
        //Check if the media is array and select one at random if it is
        let media = Array.isArray(style.ImageSrc) ? style.ImageSrc[Math.floor(Math.random() * style.ImageSrc.length)] : style.ImageSrc;
        //Check if the media is html, if it isn't set as the src of an image
        mediaObj = isHTML(media) ? media : "<img src='" + media + "' />";
    }

    //Build the pup
    let pup = $("<div class='puppy " + alertType + "' style='animation: enterAnimation" + style.Animation.Enter + " " + style.Animation.EnterDuration + "s'>" + mediaObj + message + "</div>");
    //Add the media class to the media child element
    pup.children().addClass("media");

    //Put the pup in the litter
    pup.appendTo(litter);
    //Test if there is a lifespan, if not, use base
    let lifespan = style.Lifespan == "" || parseFloat(style.Lifespan) < 1 ? config.Lifespan : style.Lifespan
    //Make sure we have a duration that is greater then 0
    let duration = parseFloat(lifespan) - (parseFloat(style.Animation.EnterDuration) + parseFloat(style.Animation.ExitDuration)) > 0 ? parseFloat(lifespan) - (parseFloat(style.Animation.EnterDuration) + parseFloat(style.Animation.ExitDuration)) : lifespan + parseFloat(style.Animation.EnterDuration) + parseFloat(style.Animation.ExitDuration);

    //Remove the pup after it has reached it's lifespan
    setTimeout(function () {
        //Add the exit animation to the pup
        pup.css({ "animation": "exitAnimation" + style.Animation.Exit + " " + style.Animation.ExitDuration + "s" });
        //Remove the pup after the exit animation completes
        setTimeout(function () {
            $(pup).remove();
        }, parseFloat(style.Animation.ExitDuration) * 1000)
    }, duration * 1000)
    return pup;
}

//Tool for creating a puppy that has a close button
function hushPuppy(message, alertType) {
    let hushPup = puppy(message, alertType);
    let hushTemplate = "<i class='fas fa-times-circle hushControl' onclick='hush(event)'></i>"
    hushPup.append(hushTemplate);
}

//Tool for removing a puppy
function hush(e) {
    e = e || window.event;
    //The puppy we are hushing
    let pup = $(e.target).parent(".puppy");
    //The type of puppy that is being hushed
    let typeOfPuppy = config.Styles.find(t => pup.hasClass(t.Name)).Name;
    //Get the style for this type of puppy
    let style = config.Styles.find(s => s.Name == typeOfPuppy);
    //Add exit animation for this style of puppy
    pup.css({ "animation": "exitAnimation" + style.Animation.Exit + " " + style.Animation.ExitDuration + "s" });
    setTimeout(function () {
        pup.remove()
    }, 1000)
}

//tool checks to see if a string is html and return a bool 
function isHTML(str) {
    if (Array.isArray(str)) str = str[0];
    let testHolder = $("<div style='display: none;'></div>").html(str);
    let result = false;
    if (testHolder.children().length > 0) result = true;
    testHolder.remove();
    return result;
}

//Checks that the basic stuff is setup like css and returns the litter
function InitializationCheck() {
    //Check if we have our stylers in place and create them if we don't
    if (hushPuppyStyle == null) BuildStyle();
    //Get the litter
    let litter = $(".litter");
    //If there is no litter create it
    if (litter.length == 0) litter = $("<div class='litter'></div>").appendTo("body");
    return litter;
}

//Config calls
function hushPuppyConfig() { };
hushPuppyConfig.SetBackgroundColor = function (type, color) {
    let t = config.Styles.find(s => s.Name == type);
    if (t != null) t.BackgroundColor = color;
}
hushPuppyConfig.SetColor = function (type, color) {
    let t = config.Styles.find(s => s.Name == type);
    if (t != null) t.Color = color;
}
hushPuppyConfig.SetBaseLifespan = function (span) {
    config.Lifespan = span;
}
hushPuppyConfig.SetLifespan = function (type, span) {
    let t = config.Styles.find(s => s.Name == type);
    if (t != null) t.Lifespan = span;
}
hushPuppyConfig.SetEnterAnimation = function (type, anim) {
    let t = config.Styles.find(s => s.Name == type);
    if (t != null) t.Animation.Enter = anim;
}
hushPuppyConfig.SetEnterDuration = function (type, dur) {
    let t = config.Styles.find(s => s.Name == type);
    if (t != null) t.Animation.EnterDuration = dur;
}
hushPuppyConfig.SetExitAnimation = function (type, anim) {
    let t = config.Styles.find(s => s.Name == type);
    if (t != null) t.Animation.Exit = anim;
}
hushPuppyConfig.SetExitDuration = function (type, dur) {
    let t = config.Styles.find(s => s.Name == type);
    if (t != null) t.Animation.ExitDuration = dur;
}
hushPuppyConfig.setMedia = function (type, media) {
    let t = config.Styles.find(s => s.Name == type);
    if (t != null) t.ImageSrc = media;
}
hushPuppyConfig.AddMedia = function (type, media) {
    let imgSrc = config.Styles.find(s => s.Name == type).ImageSrc;
    if (imgSrc.isArray()) {
        imgSrc.push(media);
    } else {
        imgSrc = [imgSrc];
        imgSrc.push(media);
    }
}
hushPuppyConfig.LitterOnLeft = function (val) {
    config.Styles.LitterValues.LitterOnTheLeft = val;
}
hushPuppyConfig.LitterOnRight = function (val) {
    config.Styles.LitterValues.LitterOnTheLeft = -val;
}
hushPuppyConfig.LitterOnTop = function (val) {
    config.Styles.LitterValues.LitterOnTheTop = val;
}
hushPuppyConfig.LitterOnBottom = function (val) {
    config.Styles.LitterValues.LitterOnTheTop = -val;
}
hushPuppyConfig.LitterSideMargin = function (val) {
    config.Styles.LitterValues.LitterSideMargin = val;
}
hushPuppyConfig.LitterTopBottomMargin = function (val) {
    config.Styles.LitterValues.TopBottomMargin = val;
}
hushPuppyConfig.AddPuppyType = function (pupTemplate) {
    config.Styles.push(pupTemplate())
}

function AddPupType(
    name,
    backgroundColor,
    color,
    lifeSpan,
    enterAnimation,
    enterDuration,
    exitAnimation,
    exitDuration,
    media) {
    this.Name = name ? name : "";
    this.BackgroundColor = backgroundColor ? backgroundColor : "";
    this.Color = color ? color : "";
    this.Lifespan = lifeSpan ? lifeSpan : "";
    this.EnterAnimation = enterAnimation ? enterAnimation : "";
    this.EnterDuration = enterDuration ? enterDuration : "";
    this.ExitAnimation = exitAnimation ? exitAnimation : "";
    this.ExitDuration = exitDuration ? exitDuration :  "";
    this.Media = media ? media : "";
}

//Convenience calls
puppy.warning = function (message) { puppy(message, "Warning"); }
puppy.success = function (message) { puppy(message, "Success"); }
puppy.error = function (message) { puppy(message, "Error"); }
puppy.loader = function (message) { hushPuppy(message, "Loader"); }
puppy.custom = function (message, type) { puppy(message, type); }
hushPuppy.warning = function (message) { hushPuppy(message, "Warning"); }
hushPuppy.success = function (message) { hushPuppy(message, "Success"); }
hushPuppy.error = function (message) { hushPuppy(message, "Error"); }
hushPuppy.loader = function (message) { hushPuppy(message, "Loader"); }
hushPuppy.custom = function (message, type) { hushPuppy(message, type); }