# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

jeff = User.create(username: "itspronouncedjif", password: "password");
tony = User.create(username: "Tony", password: "password");
bruce = User.create(username: "Bruce", password: "password");
peter = User.create(username: "Peter", password: "password");
kal = User.create(username: "Kal", password: "password");
strange = User.create(username: "S.V.Strange", password: "password");
diana = User.create(username: "Diana", password: "password");








#artists

adele = Artist.create(name: "Adele", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/adele.jpeg", about: "When the U.K. press began dubbing Adele \"the next Amy Winehouse\" in late 2007, the hype didn't touch upon the singer/songwriter influence found in the Londoner's music. Influenced by Roberta Flack and Suzanne Vega as much as Jill Scott, Adele soon became a phenomenon in her own right; her second album, 21, eventually sold an estimated 30 million copies worldwide, making her one of the few sales successes in an age of digital streaming.

Adele first made an impression in 2006 when her demo landed her a deal with XL Recordings. She toured as an opening act for Jack Penate, and graduated to headlining status by the end of 2007, thanks to BBC Radio 1 playing her single \"Daydreamer\"; another song, \"Hometown Glory,\" was also released as a single on Jamie T.'s label, Pacemaker. An appearance alongside Paul McCartney and Björk on the BBC 2 television show Later with Jools Holland came next, and a recording contract with XL Recordings was finalized soon after. Early 2008 brought similar luck as Adele found herself atop the BBC's new music talent list, which was compiled from the votes of 150 music critics. That same January, XL issued a new single, \"Chasing Pavements,\" along with her debut album, 19. The title reflected Adele's age at the time of the album's release, and its popularity resulted in the release of several bonus editions throughout the year. Also in 2009, Adele won Grammy Awards for Best New Artist and Best Female Pop Vocal Performance.

Her sophomore album, 21, featuring the gospel and disco-infused single \"Rolling in the Deep,\" was released in February of 2011. The album proved to be both a critical and commercial success, becoming one of the longest-running number one albums in history and spending over 18 weeks at the top spot. The glow of 21's success was dimmed somewhat when Adele was forced to cancel her tour after suffering a hemorrhage on her vocal cords. She underwent surgery for the hemorrhage in November of 2011. That same month, she released the concert CD/DVD Live at the Royal Albert Hall. Both Adele and 21 received many end-of-year honors, and in February 2012, as album sales began to creep closer to ten million copies, she won six major Grammy Awards, one of the few artists in history to accomplish the feat in one night.

In October 2012, Adele announced that she had recorded the theme to the 23rd James Bond film Skyfall. Produced by Paul Epworth and recorded at the prestigious Abbey Road Studios, the single entered the Top Ten of both the U.K. singles chart and the Billboard Hot 100 upon its release. By early 2013, 21 had registered sales of over 25 million copies. Although she promised she was in the early stages of creating her third album, 2013 and 2014 came and went without fresh material.

In the summer of 2015, reports of an imminent third album started to surface and, in October, the rumors were confirmed by Adele and her label. The album's first single, \"Hello,\" debuted at number one in both the U.K. and U.S., becoming the first song to sell over a million downloads in its first week of release. 25 debuted worldwide in late November 2015. It broke the single-week U.S. sales record previously held by *NSYNC's No Strings Attached. 25 went on to top the Billboard 200 for ten weeks and took home awards for Album, Song, and Record of the Year, as well as Best Pop Solo Performance and Pop Vocal, at the Grammy Awards in 2017. ~ David Jeffries, Rovi")

coldplay = Artist.create(name: "Coldplay", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/coldplay.jpg", about: "After surfacing in 2000 with the breakthrough single \"Yellow,\" Coldplay quickly became one of the biggest bands of the new millennium, honing a mix of introspective Brit-pop and anthemic rock that landed the British quartet a near-permanent residence on record charts worldwide. The group's emergence was perfectly timed; Radiohead had just released the overly cerebral Kid A, while Oasis had ditched two founding members and embraced psychedelic experimentation on Standing on the Shoulder of Giants. Audiences were hungry for a fresh-faced rock band with big aspirations and an even bigger sound, and Coldplay were more than happy to take the reins. Parachutes went multi-platinum in several countries and earned the band its first Grammy, but Coldplay continued to grow into the 2000s, topping their debut album's success with higher record sales and an increased public profile.

Chris Martin (vocals/piano), Jonny Buckland (guitar), Will Champion (drums), and Guy Berryman (bass) were all born into musical households. Martin, the eldest of five, began playing the piano as a young child and later took solace in the work of Tom Waits. Buckland, on the other hand, grew up with the heavy guitar sounds of Eric Clapton and Jimi Hendrix. Scotland native Berryman preferred funk to indie rock, thereby leaving him to play bass, while multi-instrumentalist Champion didn't plan to be a drummer until he joined Coldplay's lineup. The bandmates came together in 1996 while attending the University College of London, and the Safety EP was issued shortly after their first gig at a Manchester festival for unsigned bands. The release only saw 500 pressings, as did the subsequent Brothers & Sisters EP. Nevertheless, it was enough to win the band a U.K. deal with Parlophone Records in April 1999, and the five-track Blue Room EP arrived that fall. With nods from the media, Coldplay were hailed as the next Travis, thanks to their simple acoustics and charming personas.

Parlophone ushered Coldplay into Parr St. Studios in Liverpool, where they recorded the bulk of their debut album. Parachutes was released in July 2000 and became a swift hit on the strength of four U.K. singles, several of which enjoyed popularity in America as well. With \"Yellow\" climbing the charts on both sides of the Atlantic, Parachutes was released in the U.S. in November, where its sales soon rivaled -- and eventually surpassed -- those in the U.K.")

daftpunk = Artist.create(name: "Daft Punk", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/daft-punk.jpg", about: "Even as they evolved from French house pioneers in the '90s to dance tastemakers in the 2000s to mainstream heroes in the 2010s, Daft Punk remained one of dance music's most influential and iconic acts. The combined talents of Guy-Manuel de Homem-Christo and Thomas Bangalter, the Parisian duo quickly won acclaim for their unique blend of first-wave acid house and techno with pop, indie rock, and hip-hop. One of the pair's first projects together was Darling, an instrumental indie cover band; their current recording name derives from a review in U.K. music weekly Melody Maker of a compilation tape Darling were featured on, released by Krautrock revivalists Stereolab (their lo-fi D.I.Y. cover of a Beach Boys song was derided as \"daft punk\"). Subsequently ditching the almost inevitable creative cul-de-sac of rock for the more appealing rush of the dancefloor, the pair released their debut single, \"The New Wave,\" in 1993 on the celebrated Soma label. Instantly hailed by the dance music press as the work of a new breed of house innovators, the single was followed by \"Da Funk,\" the band's first true hit (the record sold 30,000 copies worldwide and saw thorough rinsings by everyone from Kris Needs to the Chemical Brothers).

Although the group had only released a trio of singles (\"The New Wave\" and \"Da Funk,\" as well as the 1996 limited pressing of \"Musique\"), in early 1996 Daft Punk were the subject of a minor bidding war. The group eventually signed with Virgin, with its first long-player, Homework, appearing early the following year (a brief preview of the album, \"Musique,\" was also featured on the Virgin compilation Wipeout XL next to tracks from Photek, Future Sound of London, the Chemical Brothers, and Source Direct). As with the earlier singles, the group's sound is a brazen, dancefloor-oriented blend of progressive house, funk, electro, and techno, with sprinklings of hip-hop-styled breakbeats and excessive, crowd-firing samples similar to other anthemic dance-fusion acts such as the Chemical Brothers and Monkey Mafia. In addition to his role in Daft Punk, Bangalter operates the Roulé label and has recorded under his own name (the underground smash \"Trax on da Rocks\") as well as Stardust (the huge club/commercial hit \"Music Sounds Better with You\").

After four long years of fans eagerly awaiting a follow-up to their brilliant debut, Daft Punk finally issued Discovery in March 2001. The live record Alive 1997 followed at the end of the year, and a by-now predictable four-year wait preceded the release of Human After All in early 2005. One year later, Daft Punk released a compilation, Musique, Vol. 1: 1993-2005, and in 2007 their second live record, Alive 2007, arrived. The album and its single \"Harder, Better, Faster, Stronger\" won Grammy Awards early in 2009; shortly after, it was announced that the duo would compose the soundtrack to Tron: Legacy, the sequel to the 1982 classic sci-fi film Tron. Daft Punk's music for the movie was released in November 2010, shortly before the film -- which featured the group in a cameo -- arrived in theaters.")

falloutboy = Artist.create(name: "Fall Out Boy", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/falloutboy.jpg", about: "Fall Out Boy rose to the forefront of emo pop in the mid-2000s, selling more than four million albums thanks to the band's tabloid-grabbing bassist, able-voiced frontman, and handful of Top 40 hits. The group's four members first came together in Wilmette, a bedroom community north of Chicago, around 2001. Vocalist/guitarist Patrick Stump, bassist/lyricist Pete Wentz, drummer Andrew Hurley, and guitarist Joe Trohman had all taken part in various bands connected to Chicago's underground hardcore scene. Most notably, Hurley drummed for Racetraitor, the furiously political metalcore outfit whose brief output was both a rallying point and sticking point within the hardcore community. As Fall Out Boy, the quartet used the unbridled intensity of hardcore as a foundation for melody-drenched pop-punk, with a heavy debt to the emo scene. They debuted with a self-released demo in 2001, following it up in May 2002 with a split LP (issued on the Uprising label) that also featured Project Rocket, for which Hurley also drummed. The band remained with the label for the release of a mini-LP, Fall Out Boy's Evening Out with Your Girl, but a bidding war of sorts was already in full swing.

Fall Out Boy eventually signed a deal with Fueled by Ramen, the Florida-based label co-owned by Less Than Jake drummer Vinnie Fiorello, but also received an advance from Island Records to record a proper debut album. The advance came with a right of first refusal for Island on Fall Out Boy's next album, but it also financed the recording of Take This to Your Grave, which occurred at Butch Vig's Smart Studios compound in Madison, Wisconsin, with producer Sean O'Keefe (Lucky Boys Confusion, Motion City Soundtrack) at the helm. Take This to Your Grav\e appeared in May 2003, and Fall Out Boy earned positive reviews for subsequent gigs at South by Southwest and various tour appearances. Their breakout album, the ambitious From Under the Cork Tree, followed in spring 2005, quickly reaching the Top Ten of Billboard's album chart and spawning two Top Ten hits with \"Sugar We're Going Down\" and the furiously upbeat \"Dance, Dance.\" The album went double platinum and earned the musicians a Grammy nomination for Best New Artist.")

imaginedragons = Artist.create(name: "Imagine Dragons", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/imagine-dragons.jpeg", about: "Formed in 2009, Imagine Dragons first revealed their emotionally charged and inventive sensibilities with a series of independently released EPs that earned them grassroots following. Signed to KIDinaKORNER/Interscope by hitmaking producer Alex Da Kid, the band greatly expanded their fanbase with the release of their multi-platinum breakthrough single “It’s Time” (featured on the 2012 EP Continued Silence). With their past hits also including “Radioactive” (a diamond-selling smash that won Best Rock Performance at the 2014 Grammy Awards), Imagine Dragons went on to see Smoke + Mirrors debut at #1 on the Billboard Top 200 album chart upon its release in early 2015.

For Imagine Dragons, one of the greatest achievements of Evolve is its unfettered honesty. “Instead of hiding behind metaphors, I was able to be more direct in my lyrics,” says Reynolds. “I really focused on searching deeper for lyrical value.” Along with giving the album untold emotional depth, honesty cuts through everyday chaos to reveal a luminous truth. “Right now the world can seem like a very dark and daunting place,” says Reynolds. “We wanted to create something like a lot of the records we grew up on, where it feels like you’re escaping into a world that’s much more vibrant. Our hope is that the album helps people focus on the beauty of each moment, and really see all the brilliance and color of life.”")

marshmello = Artist.create(name: "Marshmello", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/marshmellow.jpeg", about: "One white helmet. Two blacked-out eyes. And a loveable smile. Say hello to the new face of dance music: Marshmello.

The anonymous Producer/DJ is taking the music industry by storm. Becoming one of the fastest rising dance producers in history, his fanbase ranges from children to adults who have helped him gather over 2 billion streams and over 300 consecutive sold out shows worldwide. Catapulting his career with his official remix of Jack U and Justin Bieber’s global hit “Where Are U Now’ which collected over 26 million plays on Spotify in less than six months. The masked producer’s debut album, Joytime, landed him in the Top 5 on Billboard’s Top Dance/Electronic Albums, with his track “Alone” propelling his monumental success with over 110 million Spotify plays and over 800million video views, making it certified Platinum in only 1 year. As the layers of mystery continue to surround the man behind the mask, there is no doubt Marshmello’s rapid takeover of the electronic-sphere will continue to leave everyone wanting more.

“I just want to make good music,” proclaims Marshmello. “That doesn't require you knowing who I am.”")

mikeperry = Artist.create(name: "Mike Perry", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/mike-perry.jpeg", about: "Swedish born DJ & producer Mike Perry and his hypnotic global dance hit 'The Ocean' cast its own wave over the summer music landscape. With over 375 million Spotify streams (March 2017) it was one of the most played tracks on Spotify in 2016, piercing the upper tier of the global chart as it became a Top 10 mainstay in more than 20 countries worldwide. The song reached #1 with 5x platinum status in Sweden, 3x platinum in Norway, 2x platinum in Finland, platinum in Germany, France, Italy, Netherlands, Ireland, Australia and Poland, Top 5 in Germany, Norway, Austria, Switzerland and other territories and notching gold status in Germany, Switzerland, Belgium and Denmark so far. The track became a hit in Perry’s home country immediately after release, conquering the global charts in a mere two months without any major label support. With the follow-up single 'Inside The Lines' featuring singer Casso arriving just in time for fall, Perry became one of the most listened-to/shared artists in the blogosphere. Add to that a Top Ten Spotify smash in multiple countries including Sweden, Germany, Norway, Netherlands, Finland, Denmark, Hong Kong and more – the track did not stay unrecognized by global players like Tiësto, who supported ‘The Ocean’ throughout his tour stops in 2016, Kygo, The Chainsmokers and many more... With the highly anticipated ‘Stay Young’, Mike took on the wonderful Tessa from Norway. The outcome was an ode to everyone’s childhood and the compulsion to not grow old.")

postmalone = Artist.create(name: "Post Malone", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/posty.jpeg", about: "Dropping basketball references like the old-school but wrapping them in thoroughly modern beats, Post Malone hit in 2015 with his single \"White Iverson.\" Raised in Dallas, Malone was NFL before he was NBA thanks to a father who worked for the Cowboys. He loved music from a young age, and planned on joining a band thanks to the video game Guitar Hero, but when his dad gave him a copy of Terror Squad's hit \"Lean Back,\" Post decided to become an MC. He hung with Dallas crew the IRAS until a move to the West Coast dropped him in Los Angeles. After putting some braids in his hair, he coined the term \"White Iverson,\" and when he posted the track in early 2015, he hit a million views within the month. Malone signed with the Republic label later that year. In 2016, he released the single \"Go Flex\" along with his official debut mixtape, August 26th, which was actually released in May. Months later, his first studio effort arrived. Stoney featured guests like Justin Bieber, Migos' Quavo, and Kehlani. The album peaked at number six on the Billboard 200 and was certified multi-platinum. Following the success of his debut, Post issued the singles \"rockstar\" with 21 Savage and \"Psycho\" with Ty Dolla $ign. The former topped the Hot 100 for weeks while the latter peaked at number two. The tracks landed on his sophomore follow-up, Beerbongs & Bentleys, which landed at number one upon its release. Along with producers like Scott Storch, PartyNextDoor, Louis Bell, and London on da Track, the effort also featured guest rappers Nicki Minaj, YG, and G-Eazy, among others. ~ David Jeffries, Rovi")

taylorswift = Artist.create(name: "Taylor Swift", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/taylor-swift.jpeg", about: "Taylor Swift is that rarest of pop phenomena: a superstar who managed to completely cross over from country to the mainstream. Other singers performed similar moves -- notably, Dolly Parton and Willie Nelson both became enduring mainstream icons based on their '70s work -- but Swift shed her country roots like they were a second skin; it was a necessary molting to reveal she was perhaps the sharpest, savviest populist singer/songwriter of her generation, one who could harness the Zeitgeist and turn it personal and, just as impressively, perform the reverse. These skills were evident on her earliest hits, especially the neo-tribute \"Tim McGraw,\" but her second album, 2008's Fearless, showcased a songwriter discovering who she was and, in the process, finding a mass audience. Fearless wound up having considerable legs not only in the U.S., where it racked up six platinum singles on the strength of the Top Ten hits \"Love Story\" and \"You Belong with Me,\" but throughout the world, performing particularly well in the U.K., Canada, and Australia. Speak Now, delivered almost two years later in the autumn of 2010, consolidated that success and Swift moved into the stratosphere of superstardom, with her popularity only increasing on 2012's Red and 2014's 1989, a pair of records that found her moving assuredly from country into a pop realm where she already belonged.

This sense of confidence had been apparent in Taylor Swift since the beginning. The daughter of two bankers -- her father, Scott Kingsley Swift, worked at Merrill Lynch; her mother Andrea spent time as a mutual fund marketing executive -- Swift was born in Reading, Pennsylvania and raised in suburban Wyomissing. She began to show interest in music at the age of nine, and Shania Twain wound up as her biggest formative influence. Swift started to work regularly at local talent contests, eventually winning a chance to open for Charlie Daniels. Soon, she learned how to play guitar and began writing songs, signing a music management deal with Dan Dymtrow; her family relocated to Nashville with the intent of furthering her music career. She was just 14 years old but on the radar of the music industry, signing a development deal with RCA Records in 2004. Swift sharpened her skills with a variety of professional songwriters, forming the strongest connections with Liz Rose. Taylor's original songs earned her a deal with Sony/ATV Music Publishing, but not long after that 2004 deal she parted ways with Dymtrow and RCA, all with the intent of launching her recording career now, not later.

Things started moving swiftly once Swift came to the attention of Scott Borchetta, a former DreamWorks Records exec about to launch Big Machine Records. Borchetta saw Swift perform at a songwriters showcase at the Bluebird Cafe and he signed her to Big Machine in 2005; shortly afterward, she started work on her debut with producer Nathan Chapman, who'd previously helmed demos for Taylor. Boasting original song credits on every one of the record's 11 songs (she penned three on her own), Taylor Swift appeared in October 2006 to strong reviews and Swift made sure to work the album hard, appearing at every radio or television event offered and marshaling a burgeoning fan base through use of MySpace. \"Tim McGraw,\" the first song from the album, did well but \"Teardrops on My Guitar\" and \"Our Song\" did better on both the pop and country charts, where she racked up five consecutive Top Ten singles. Other successes followed in the wake of the debut -- a Grammy nomination for Best New Artist (she lost to Amy Winehouse), stopgap EPs of Christmas songs -- but Swift concentrated on delivering her sophomore set, Fearless.")

theweeknd = Artist.create(name: "The Weeknd", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/weeknd.jpg", about: "The Weeknd is the alias of alternative R&B enigma-turned-pop star Abel Tesfaye, whose aching accounts of emotionally and physically toxic indulgences have translated to multi-platinum sales and Grammy recognition. The singer and songwriter made his early-2010s breakthrough with morose ballads that seemed to have no designs on mainstream appeal. Within a few years, however, Tesfaye had scored Top Ten hits with an Ariana Grande duet (\"Love Me Harder\"), the lead single from a major motion picture (\"Earned It\"), and a retro-contemporary disco-funk single (\"I Can't Feel My Face\"), the last of which was nominated for a Nickelodeon Kids\' Choice Award despite its subject (cocaine). Tesfaye received early support from Drake and scored his first Top Ten R&B/hip-hop placement as the featured artist on the fellow Torontonian\'s \"Crew Love,\" but he swiftly outgrew his status as a Drake affiliate with his own hits and a streak of appearances on high-profile tracks by Wiz Khalifa, Future, Beyoncé, and Lana Del Rey.

Tesfaye debuted the Weeknd in late 2010 with three songs uploaded to YouTube. Made with producer Jeremy Rose, they served as a low-key prelude to three mixtapes self-released as free digital downloads the following year. First was with House of Balloons (March), where clear traces of radio-friendly contemporary R&B à la Trey Songz, Jeremih, the-Dream, and Drake were synthesized with the progressive left-of-center likes of Spacek and Sa-Ra. Recorded in collaboration with producers Doc McKinney and Illangelo, among others, the set garnered widespread coverage within days of its release. A similar second mixtape, Thursday (August), preceded several appearances on Drake\'s album Take Care. Featuring a cover of Michael Jackson\'s \"Dirty Diana,\" Echoes of Silence (December) completed the trilogy just before the end of the year. The following June, \"Crew Love,\" off Take Care, reached the Top Ten of Billboard\'s Hot R&B/Hip-Hop chart. A few months later, Tesfaye was featured on another charting single, Wiz Khalifa\'s \"Remember You.\"

After Tesfaye signed with Universal Republic, the three Weeknd mixtapes were remastered and bundled with three new songs for Trilogy, issued in November 2012. Despite consisting of material previously available for free, the set debuted at number four on the Billboard 200 chart. The following April, Tesfaye won Juno Awards in the categories of Breakthrough Artist of the Year and R&B/Soul Recording of the Year. Trilogy was certified platinum by the RIAA the next month. Kiss Land, much darker in tone than its title implied, followed in September 2013 and debuted at number two. Out of its several singles, only \"Live For,\" featuring Drake, touched the Hot R&B/Hip-Hop chart. Tesfaye had much more success with a series of non-album singles that followed. \"Often,\" released in 2014, was a Top Ten R&B/Hip-Hop hit. He was featured on Ariana Grande\'s \"Love Me Harder,\" which reached the Top Ten of the Hot 100 and went platinum in the U.S. \"Earned It,\" featured in Fifty Shades of Grey, repeated the same feats.")


louis_the_child = Artist.create(name: "Louis the Child", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/louis-the-child.jpeg", about:"tbd")


ac_dc = Artist.create(name: "AC/DC", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/acdc.jpeg", about:"tbd")


alan_walker = Artist.create(name: "Alan Walker", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/alan-walker.jpeg", about:"tbd")


charlie_puth = Artist.create(name: "Charlie Puth", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/charlie-puth.jpeg", about:"tbd")


drake = Artist.create(name: "Drake", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/drake.jpeg", about:"tbd")


ed_sheeran = Artist.create(name: "Ed Sheeran", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/ed-sheeran.jpeg", about:"tbd")


kendrick_lamar = Artist.create(name: "Kendrick Lamar", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/kendrick.jpeg", about:"tbd")


hans_zimmer = Artist.create(name: "Hans Zimmer", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/hans-zimmer.jpeg", about:"tbd")


jon_bellion = Artist.create(name: "Jon Bellion", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/jon-bellion.jpeg", about:"tbd")


kygo = Artist.create(name: "Kygo", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/kygo.jpeg", about:"tbd")


mtm = Artist.create(name: "MagnusTheMagnus", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/magnus-the-magnus.jpeg", about:"tbd")


m5 = Artist.create(name: "Maroon 5", img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/artists/maroon-5.jpeg", about:"tbd")
















#albums

twentyfive = Album.create(title: "25", artist_id: adele.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/25.jpg")


twentyone = Album.create(title: "21", artist_id: adele.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/21.png")


nineteeneightynine = Album.create(title: "1989", artist_id: taylorswift.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/1989.png")


ram = Album.create(title: "Random Access Memories", artist_id: daftpunk.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/RAM.jpg")


alone = Album.create(title: "Alone", artist_id: marshmello.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/alone.jpg")


evolve = Album.create(title: "Evolve", artist_id: imaginedragons.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/evolve.jpg")


ghoststories = Album.create(title: "Ghost Stories", artist_id: coldplay.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/ghost-stories.jpg")


mx = Album.create(title: "Mylo Xyloto", artist_id: coldplay.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/mylo-xyloto.jpg")


nightvisions = Album.create(title: "Night Visions", artist_id: imaginedragons.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/night-visions.jpg")


stoney = Album.create(title: "Stoney", artist_id: postmalone.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/stoney.png")


theocean = Album.create(title: "The Ocean", artist_id: mikeperry.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/theocean.jpg")


xy = Album.create(title: "X & Y", artist_id: coldplay.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/x%26y.png")


damn = Album.create(title: "DAMN.", artist_id: kendrick_lamar.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/damn.jpeg")


reputation = Album.create(title: "Reputation", artist_id: taylorswift.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/reputation.jpg")


back_in_black = Album.create(title: "Back in Black", artist_id: ac_dc.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/back-in-black.jpg")


ed_divide = Album.create(title: "Divide", artist_id: ed_sheeran.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/divide.jpg")


interstellar = Album.create(title: "Interstellar", artist_id: hans_zimmer.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/interstellar.jpg")


scary_hours = Album.create(title: "Scary Hours", artist_id: drake.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/scary-hours.jpg")


the_human_condition = Album.create(title: "The Human Condition", artist_id: jon_bellion.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/the-human-condition.jpg")


voice_notes = Album.create(title: "Voicenotes", artist_id: charlie_puth.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/attention.jpg")


nine_track_mind = Album.create(title: "Nine Track Mind", artist_id: charlie_puth.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/nine-track-mind.jpg")


ed_x = Album.create(title: "X", artist_id: ed_sheeran.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/x.jpg")


area_a = Album.create(title: "Area", artist_id: mtm.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/area.jpg")


love_is_alive = Album.create(title: "Love is Alive EP", artist_id: louis_the_child.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/love-is-alive.jpg")


stargazing = Album.create(title: "Stargazing", artist_id: kygo.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/stargazing.jpg")


maroon_v = Album.create(title: "V", artist_id: m5.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/v.png")


faded = Album.create(title: "Faded", artist_id: alan_walker.id, img_url: "https://s3-us-west-1.amazonaws.com/audifymaster/album_art/Screen+Shot+2018-06-13+at+2.28.51+PM.png")















#songs 

getlucky = Song.create(title: "Get Lucky", album_id: ram.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Get+Lucky.mp3", duration: "369")


alonesong = Song.create(title: "Alone", album_id: alone.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01+Alone.m4a", duration: "277")


rockstar = Song.create(title: "rockstar (feat. 21 Savage)", album_id: stoney.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01+rockstar+(feat.+21+Savage).m4a", duration: "218" )


whateverittakes = Song.create(title: "Whatever it Takes", album_id: evolve.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/02+Whatever+It+Takes.m4a", duration: "201")


style = Song.create(title: "Style", album_id: nineteeneightynine.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/03+Style.m4a", duration: "231")


wi = Song.create(title: "White Iverson", album_id: stoney.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/06+White+Iverson.m4a", duration: "256")


goflex = Song.create(title: "Go Flex", album_id: stoney.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/09+Go+Flex.m4a", duration: "179")


congratulations = Song.create(title: "Congratulations (feat. Quavo)", album_id: stoney.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/12+Congratulations+(feat.+Quavo).m4a", duration: "220")


demons =  Song.create(title: "Demons", album_id: nightvisions.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Demons.mp3", duration: "176")


hello = Song.create(title: "Hello", album_id: twentyfive.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Hello.mp3", duration: "295")


instantcrush = Song.create(title: "Instant Crush", album_id: ram.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Instant+Crush.mp3", duration: "337")


paradise = Song.create(title: "Paradise", album_id: mx.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Paradise.mp3", duration: "277")


radioactive = Song.create(title: "Radioactive", album_id: nightvisions.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Radioactive.mp3", duration: "186")


rollinginthedeep = Song.create(title: "Rolling in the Deep", album_id: twentyone.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Rolling+In+The+Deep.mp3", duration: "229")


theoceansong = Song.create(title: "The Ocean", album_id: theocean.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/The+Ocean+(feat.+Shy+Martin).m4a", duration: "183")


we_dont_talk = Song.create(title: "We Don't Talk Anymore (feat. Selena Gomez)", album_id: nine_track_mind.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/05+We+Dont+Talk+Anymore+(feat.+Selena+Gomez).m4a", duration: "217")


animals = Song.create(title: "Animals", album_id: maroon_v.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Animals+++Maroon+5+++V.mp3", duration: "229")


humble = Song.create(title: "HUMBLE.", album_id: damn.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01+HUMBLE..m4a", duration: "177")


gods_plan = Song.create(title: "God's Plan", album_id: scary_hours.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01+Gods+Plan.m4a", duration: "199")


fix_you = Song.create(title: "Fix You", album_id: xy.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01+Fix+You.m4a", duration: "295")


komh = Song.create(title: "King of My Heart", album_id: reputation.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/10+King+of+My+Heart.m4a", duration: "214")


ready_for_it = Song.create(title: "...Ready for it", album_id: reputation.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01+...Ready+For+It_.m4a", duration: "208")


bib = Song.create(title: "Back in Black", album_id: back_in_black.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Back+In+Black.mp3", duration: "256")


faded_s = Song.create(title: "Faded", album_id: faded.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Faded.mp3", duration: "209")


it_aint_me = Song.create(title: "It Ain't Me (Original Mix)", album_id: stargazing.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01.+Kygo+%26+Selena+Gomez+-+It+Ain't+Me+(Original+Mix).mp3", duration: "221")


shoot_tt = Song.create(title: "Shoot To Thrill", album_id: back_in_black.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Shoot+To+Thrill.mp3", duration: "318")


first_time = Song.create(title: "First Time (Original Mix)", album_id: stargazing.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01.+Kygo+%26+Ellie+Goulding+-+First+Time+(Original+Mix).mp3", duration: "193")


stargazing_song = Song.create(title: "Stargazing (feat. Justin Jesso)", album_id: stargazing.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01+Stargazing+(feat.+Justin+Jesso).m4a", duration: "236")


area_s = Song.create(title: "Area", album_id: area_a.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01+Area.m4a", duration: "180")


attn = Song.create(title: "Attention", album_id: voice_notes.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01+Attention.m4a", duration: "211")


slow_down = Song.create(title: "Slow Down Love (feat. Chelsea Cut)", album_id: love_is_alive.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/03+Slow+Down+Love+(feat.+Chelsea+Cut.m4a", duration: "157")


perfect = Song.create(title: "Perfect", album_id: ed_divide.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/05+Perfect.m4a", duration: "263")


shape_of_you = Song.create(title: "Shape of You", album_id: ed_divide.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/04+Shape+of+You.m4a", duration: "233")


ghc = Song.create(title: "Guillotine (feat. Travis Mendes)", album_id: the_human_condition.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/01+Guillotine+(feat.+Travis+Mendes).m4a", duration: "208")



coth = Song.create(title: "Castle on the Hill", album_id: ed_divide.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/02+Castle+on+the+Hill.m4a", duration: "261")


all_time_low = Song.create(title: "All Time Low", album_id: the_human_condition.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/All+Time+Low.mp3", duration: "221")

stay = Song.create(title: "S.T.A.Y.", album_id: interstellar.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/15.+S.T.A.Y..mp3", duration: "383")


coward = Song.create(title: "Coward", album_id: interstellar.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/13.+Coward.mp3", duration: "506")


mountains = Song.create(title: "Mountains", album_id: interstellar.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/08.+Mountains.mp3", duration: "219")


cornfield = Song.create(title: "Cornfield Chase", album_id: interstellar.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/02.+Cornfield+Chase.mp3", duration: "127")


i_see_fire = Song.create(title: "I See Fire", album_id: ed_x.id, song_url: "https://s3-us-west-1.amazonaws.com/audifymaster/songs/Ed+Sheeran+-+I+See+Fire.mp3", duration: "300")





















# Playlists

#jeff
jeffp1 = Playlist.create(title: "Manic Mornings", creator_id: jeff.id)

    PlaylistSong.create(playlist_id: jeffp1.id, song_id: fix_you.id)
    PlaylistSong.create(playlist_id: jeffp1.id, song_id: i_see_fire.id)
    PlaylistSong.create(playlist_id: jeffp1.id, song_id: coward.id)
    PlaylistSong.create(playlist_id: jeffp1.id, song_id: coth.id)
    PlaylistSong.create(playlist_id: jeffp1.id, song_id: perfect.id)
    PlaylistSong.create(playlist_id: jeffp1.id, song_id: bib.id)

jeffp2 = Playlist.create(title: "This Is Post Malone", creator_id: jeff.id)

    PlaylistSong.create(playlist_id: jeffp2.id, song_id: rockstar.id)
    PlaylistSong.create(playlist_id: jeffp2.id, song_id: goflex.id)
    PlaylistSong.create(playlist_id: jeffp2.id, song_id: wi.id)
    PlaylistSong.create(playlist_id: jeffp2.id, song_id: congratulations.id)

jeffp3 = Playlist.create(title: "Vocals", creator_id: jeff.id)

    PlaylistSong.create(playlist_id: jeffp3.id, song_id: i_see_fire.id)
    PlaylistSong.create(playlist_id: jeffp3.id, song_id: hello.id)
    PlaylistSong.create(playlist_id: jeffp3.id, song_id: rollinginthedeep.id)
    PlaylistSong.create(playlist_id: jeffp3.id, song_id: rollinginthedeep.id)

jeffp4 = Playlist.create(title: "Vibes", creator_id: jeff.id)

    PlaylistSong.create(playlist_id: jeffp4.id, song_id: we_dont_talk.id)
    PlaylistSong.create(playlist_id: jeffp4.id, song_id: komh.id)
    PlaylistSong.create(playlist_id: jeffp4.id, song_id: stargazing_song.id)
    PlaylistSong.create(playlist_id: jeffp4.id, song_id: theoceansong.id)
    PlaylistSong.create(playlist_id: jeffp4.id, song_id: fix_you.id)
    PlaylistSong.create(playlist_id: jeffp4.id, song_id: wi.id)

jeffp5 = Playlist.create(title: "Chill", creator_id: jeff.id)

    PlaylistSong.create(playlist_id: jeffp5.id, song_id: theoceansong.id)
    PlaylistSong.create(playlist_id: jeffp5.id, song_id: faded_s.id)
    PlaylistSong.create(playlist_id: jeffp5.id, song_id: stargazing_song.id)
    PlaylistSong.create(playlist_id: jeffp5.id, song_id: theoceansong.id)
    PlaylistSong.create(playlist_id: jeffp5.id, song_id: fix_you.id)
    PlaylistSong.create(playlist_id: jeffp5.id, song_id: it_aint_me.id)

jeffp6 = Playlist.create(title: "Vibes", creator_id: jeff.id)

    PlaylistSong.create(playlist_id: jeffp6.id, song_id: getlucky.id)
    PlaylistSong.create(playlist_id: jeffp6.id, song_id: komh.id)
    PlaylistSong.create(playlist_id: jeffp6.id, song_id: stargazing_song.id)
    PlaylistSong.create(playlist_id: jeffp6.id, song_id: theoceansong.id)
    PlaylistSong.create(playlist_id: jeffp6.id, song_id: fix_you.id)
    PlaylistSong.create(playlist_id: jeffp6.id, song_id: wi.id)

jeffp7 = Playlist.create(title: "Digging Now", creator_id: jeff.id)
    PlaylistSong.create(playlist_id: jeffp7.id, song_id: we_dont_talk.id)
    PlaylistSong.create(playlist_id: jeffp7.id, song_id: shape_of_you.id)
    PlaylistSong.create(playlist_id: jeffp7.id, song_id: area_s.id)
    PlaylistSong.create(playlist_id: jeffp7.id, song_id: theoceansong.id)
    PlaylistSong.create(playlist_id: jeffp7.id, song_id: fix_you.id)
    PlaylistSong.create(playlist_id: jeffp7.id, song_id: congratulations.id)
#Tony

tonyp1 = Playlist.create(title: "I am ironman", creator_id: tony.id)

    PlaylistSong.create(playlist_id: tonyp1.id, song_id: shoot_tt.id)
    PlaylistSong.create(playlist_id: tonyp1.id, song_id: back_in_black.id)
    PlaylistSong.create(playlist_id: tonyp1.id, song_id: goflex.id)

#bruce

brucep1 = Playlist.create(title: "Black", creator_id: bruce.id)

    PlaylistSong.create(playlist_id: brucep1.id, song_id: stargazing_song.id)
    PlaylistSong.create(playlist_id: brucep1.id, song_id: komh.id)
    PlaylistSong.create(playlist_id: brucep1.id, song_id: stargazing_song.id)
    PlaylistSong.create(playlist_id: brucep1.id, song_id: all_time_low.id)
    PlaylistSong.create(playlist_id: brucep1.id, song_id: fix_you.id)

brucep2 = Playlist.create(title: "Nanananana", creator_id: bruce.id)

    PlaylistSong.create(playlist_id: brucep2.id, song_id: perfect.id)
    PlaylistSong.create(playlist_id: brucep2.id, song_id: stay.id)
    PlaylistSong.create(playlist_id: brucep2.id, song_id: stargazing_song.id)
    PlaylistSong.create(playlist_id: brucep2.id, song_id: back_in_black.id)
    PlaylistSong.create(playlist_id: brucep2.id, song_id: fix_you.id)
    PlaylistSong.create(playlist_id: brucep2.id, song_id: wi.id)
    PlaylistSong.create(playlist_id: brucep2.id, song_id: fix_you.id)
    PlaylistSong.create(playlist_id: brucep2.id, song_id: ghc.id)

#diana 

dianap1 = Playlist.create(title: "W", creator_id: diana.id)

    PlaylistSong.create(playlist_id: dianap1.id, song_id: radioactive.id)
    PlaylistSong.create(playlist_id: dianap1.id, song_id: theoceansong.id)
    PlaylistSong.create(playlist_id: dianap1.id, song_id: komh.id)
    PlaylistSong.create(playlist_id: dianap1.id, song_id: stargazing_song.id)
    PlaylistSong.create(playlist_id: dianap1.id, song_id: fix_you.id)

peterp1 = Playlist.create(title: "Great Power", creator_id: peter.id)

    PlaylistSong.create(playlist_id: peterp1.id, song_id: humble.id)
    PlaylistSong.create(playlist_id: peterp1.id, song_id: theoceansong.id)
    PlaylistSong.create(playlist_id: peterp1.id, song_id: komh.id)
    PlaylistSong.create(playlist_id: peterp1.id, song_id: animals.id)

peterp2 = Playlist.create(title: "Great Responsibility", creator_id: peter.id)

    PlaylistSong.create(playlist_id: peterp2.id, song_id: gods_plan.id)
    PlaylistSong.create(playlist_id: peterp2.id, song_id: it_aint_me.id)
    PlaylistSong.create(playlist_id: peterp2.id, song_id: komh.id)
    PlaylistSong.create(playlist_id: peterp2.id, song_id: ghc.id)
    PlaylistSong.create(playlist_id: peterp2.id, song_id: coth.id)



kalp1 = Playlist.create(title: "Steel", creator_id: kal.id)
    PlaylistSong.create(playlist_id: kalp1.id, song_id: demons.id)
    PlaylistSong.create(playlist_id: kalp1.id, song_id: it_aint_me.id)
    PlaylistSong.create(playlist_id: kalp1.id, song_id: komh.id)
    PlaylistSong.create(playlist_id: kalp1.id, song_id: back_in_black.id)
    PlaylistSong.create(playlist_id: kalp1.id, song_id: fix_you.id)
    PlaylistSong.create(playlist_id: kalp1.id, song_id: fix_you.id)
    PlaylistSong.create(playlist_id: kalp1.id, song_id: ghc.id)
    PlaylistSong.create(playlist_id: kalp1.id, song_id: coth.id)

strangep1 = Playlist.create(title: "Meditate", creator_id: strange.id)

    PlaylistSong.create(playlist_id: strangep1.id, song_id: whateverittakes.id)
    PlaylistSong.create(playlist_id: strangep1.id, song_id: ready_for_it.id)
    PlaylistSong.create(playlist_id: strangep1.id, song_id: paradise.id)
    PlaylistSong.create(playlist_id: strangep1.id, song_id: stargazing_song.id)
    PlaylistSong.create(playlist_id: strangep1.id, song_id: all_time_low.id)
    PlaylistSong.create(playlist_id: strangep1.id, song_id: fix_you.id)












































