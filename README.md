# HushPuppy

HushPuppy.js is a simple notification tool. Just add one js file and call puppying. 

To call a basic puppy just invoke puppy("Message")
Have an important message, call puppy("Message", "warning")
or
call puppy.warning("Message")

Every puppy has a life span before it disappears. Want them to leave early? Call a hushpuppy that can be closed early by your user.

To call a basic hushpuppy, invoke hushpuppy("Message")

Don't like something about how hushpuppy looks or works?
Call hushPuppyConfig.whatyouwanttochange to make it be different. 

Options include: 
hushPuppyConfig.SetBackgroundColor("eventType", "red") => This one changes the background color of specified puppy type
hushPuppyConfig.SetColor("eventType", "red") => This one changes the color of specified puppy type
hushPuppyConfig.SetBaseLifespan(5) => How long do all puppys live
hushPuppyConfig.SetLifespan("eventType", 5) => How long does one type of puppy live
hushPuppyConfig.SetEnterAnimation("eventType", "enterAnimation") => Set the enter animation of specified event
hushPuppyConfig.SetEnterDuration("eventType", 5) => Set how long an events enter animation takes 
hushPuppyConfig.SetExitAnimation("eventType", "enterAnimation") => Set the exit animation of specified event
hushPuppyConfig.SetExitDuration("eventType", 5) => Set how long an events exit animation takes 
hushPuppyConfig.setMedia("eventType", "https://linktomedia.media") => Each puppy has a media object that can be added, you designate it here. Basic puppys use fontawesome
hushPuppyConfig.addMedia("eventType", ["https://linktomedia.media"]) => Adds media to an array of media elements. You can pass it an array of media strings or just another one
hushPuppyConfig.LitterOnLeft(5) => Sets the litter of puppys X pixels on the left
hushPuppyConfig.LitterOnRight(5) => Sets the litter of puppys X pixels on the right
hushPuppyConfig.LitterOnTop(5) => Sets the litter of puppys X pixels on the top
hushPuppyConfig.LitterOnBottom(5) => Sets the litter of puppys X pixels on the bottom
hushPuppyConfig.LitterSideMargin(5) => Set the litters margin on the side to X
hushPuppyConfig.LitterTopBottomMargin(5) => Set the litters margin on the top and bottom to X
hushPuppyConfig.AddPuppyType(pupTemplate) => Create a custom puppy type

pupTemplate = {
            Name: "",
            BackgroundColor: "",
            Color: "",
            Lifespan: "",
            BorderRadius: "",
            TopBottomPadding: "",
            LeftRightPadding: "",
            Animation: {
                Enter: "",
                EnterDuration: "",
                Exit: "",
                ExitDuration: ""
            },
            ImageSrc: [
                "",
            ],
        }
         
  Puppy types = 
    Base,
    Success,
    Warning,
    Error,
    Loader
    
Enter Animations 
    FadeIn => Puppy fades in from nothing
    ClimbUp => Puppy climbs up from off the screen
    SlideFromRight => Puppy slides in from the right off the screen
    SlideFromLeft => Puppy slides in from the left off of the screen
    PopIn => Puppy expands from a point and pops in
    
Exit Animations
    FadeOut => The Kurgan suggestd that burning out was better, but this puppy fades away.
    FallDown => Puppy falls down off the screen
    SlideRight => Puppy slides off to the right
    SlideUp => Puppy slides up and off the screen
    PopOut => Puppy pops a smidge bigger then shriks to nothing
