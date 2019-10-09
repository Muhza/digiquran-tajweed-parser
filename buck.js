class Buck {

    constructor() {
        this.chars = "آ ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي"
        this.buck = "A A b t v j H x d * r z s $ S D T Z E g f q k l m n h w y"
        this.trans= "ā ā b t th j h kh d dh r z s sh ṣ ḍ ṭ ẓ ʿ gh f q k l m n h w y"

        this.charsArr = chars.split(' ');
        this.buckArr = buck.split(' ');
        this.transArr = trans.split(' ');

        // MISSING CHARACTERS: أ إ ئ ء ة ؤ
        // Let's add them!
        charsArr.push("ى"); 		buckArr.push("Y");	transArr.push("ā");
        charsArr.push("أ"); 		buckArr.push(">");	transArr.push("");
        charsArr.push("إ"); 		buckArr.push("<");	transArr.push("");
        charsArr.push("ئ"); 		buckArr.push("}");	transArr.push("");
        charsArr.push("ء"); 		buckArr.push("X");  transArr.push("'");
        charsArr.push("ؤ");		    buckArr.push("&");	transArr.push(" ");
        //missing characters for harakath.
        charsArr.push("\u{0652}"); 	buckArr.push("o");	 transArr.push("'");
        charsArr.push("\u{064e}"); 	buckArr.push("a");	 transArr.push("a");
        charsArr.push("\u{0650}"); 	buckArr.push("i");	 transArr.push("i");
        charsArr.push("\u{064f}"); 	buckArr.push("u");	 transArr.push("");
        charsArr.push("\u{064b}"); 	buckArr.push("F");	 transArr.push("an");
        charsArr.push("\u{064d}"); 	buckArr.push("K");	 transArr.push("in");
        charsArr.push("\u{064c}"); 	buckArr.push("N");	 transArr.push("un");
        charsArr.push("\u{0626}"); 	buckArr.push("}");	 transArr.push("");
        charsArr.push("\u{0640}"); 	buckArr.push("_");	 transArr.push("");
        charsArr.push("\u{0651}"); 	buckArr.push("~");	 transArr.push("(double)");
        charsArr.push("\u{0653}"); 	buckArr.push("^");	 transArr.push("");
        charsArr.push("\u{0654}"); 	buckArr.push("#");	 transArr.push("");
        charsArr.push("\u{0671}"); 	buckArr.push("{");	 transArr.push("");
        charsArr.push("\u{0670}"); 	buckArr.push("`");	 transArr.push("");
        charsArr.push("\u{06e5}"); 	buckArr.push(",");	 transArr.push("");
        charsArr.push("\u{06e6}"); 	buckArr.push(".");	 transArr.push("");
        charsArr.push("ة"); 		buckArr.push("p");	 transArr.push("t");
        //charsArr.push("ة"); 	    buckArr.push("P");	 transArr.push(" ");
        charsArr.push("\u{06df}"); 	buckArr.push("@");	 transArr.push("");
        charsArr.push("\u{06e2}"); 	buckArr.push("[");	 transArr.push("");
        charsArr.push("\u{06ed}"); 	buckArr.push("]");	 transArr.push("");
        charsArr.push("\u{0621}"); 	buckArr.push("\"");  transArr.push("");
        charsArr.push("\u{06DC}"); 	buckArr.push(":");   transArr.push("");
        charsArr.push("\u{06E0}"); 	buckArr.push("\"");  transArr.push("");
        charsArr.push(" "); 		buckArr.push(" ");	 transArr.push(" ");
        charsArr.push(";"); 		buckArr.push(";");	 transArr.push("");
        charsArr.push("\n"); 		buckArr.push("\n");  transArr.push("");
    }

    toArabic(text){
        let arabic = '';
        let letters = text.split();
        letters.forEach((letter) => {
            let buckArrKey = this.buckArr.indexOf(letter);
            if (buckArrKey != -1) {
                // We've found a match
                arabic += this.charsArr[buckArrKey];
            } else {
                // No match found, append the letter as it is
                if (!isNaN(letter)) {
                    arabic += letter;
                }
            }
        })

        return arabic;
    }

  }