/* Duetto app */
const T = {
  es:{
    needMusic:"Buscan música", needLyrics:"Buscan letra", all:"Todo",
    explore:"Explorar", publish:"Publicar", mine:"Lo mío",
    demo:"Beta: tus publicaciones se comparten con todos y los acuerdos se firman con tu wallet de Solana.",
    chTag:"Reto de la semana", chTitle:"Un coro sobre el mar Caribe", chText:"Sube tu letra o tu melodía con la etiqueta #mar. La propuesta más votada gana 100 SKR.",
    hasLyrics:"Tiene letra · busca música", hasMusic:"Tiene música · busca letra",
    proposals:"propuestas", votes:"votos", open:"Abierta", closed:"Cerrada",
    by:"por", split:"Reparto", lyricsW:"Letra", musicW:"Música",
    unlockTitle:"Antes de ver la obra completa", unlockText:"Al aceptar te comprometes a estas reglas:",
    r1:"Esta obra es de su autor. No la usas fuera de Duetto sin un acuerdo firmado.",
    r2:"Si te escogen, el reparto será el que ves aquí.",
    r3:"Lo que tú envíes queda registrado con tu nombre, huella digital y fecha.",
    accept:"Acepto y quiero ver", cancel:"Cancelar",
    seeFull:"Ver completa", sendProp:"Enviar propuesta", sendMelody:"Enviar mi melodía", sendLyrics:"Escribir mi letra",
    propsTitle:"Propuestas", noProps:"Todavía no hay propuestas. ¡Sé el primero!",
    choose:"Escoger esta", chosen:"Escogida", vote:"Votar", voted:"Votado",
    rateL:"Letra", rateM:"Melodía", rateH:"Gancho", comment:"Comentar", commentPh:"Escribe una crítica constructiva…",
    back:"Volver",
    newPost:"¿Qué tienes?", iHaveL:"Tengo letra", iHaveLs:"Busco quien le ponga música", iHaveM:"Tengo música", iHaveMs:"Busco quien le escriba letra",
    title:"Título", genre:"Género", mood:"Tema o idea", moodPh:"De qué trata o qué buscas…",
    lyrics:"Letra", lyricsPh:"Pega o escribe tu letra aquí…",
    audio:"Audio (instrumental, melodía o nota de voz)", audioPick:"Toca para escoger un audio", audioHint:"Puedes grabar con la grabadora del teléfono y subirlo aquí.",
    splitL:"¿Qué porcentaje propones?", you:"Tú", collab:"Colaborador",
    post:"Publicar y registrar huella", needFields:"Completa el título y la letra o el audio.",
    posted:"Publicado. Huella registrada.",
    propTitleL:"Tu melodía para esta letra", propTitleM:"Tu letra para esta música",
    note:"Nota para el autor", notePh:"Cuéntale tu idea…",
    optAudio:"Audio de ti cantándola (opcional)",
    agreeSplit:"Acepto el reparto", sent:"Propuesta enviada y registrada.",
    agreement:"Acuerdo de coautoría", signWith:"Firmar con mi wallet", signed:"Firmado", pending:"Pendiente",
    switchTo:"Cambia al usuario para firmar", allSigned:"Acuerdo completo. Ya pueden registrarla juntos en ONDA como coautores.",
    fp:"Huella digital (SHA-256)", date:"Fecha",
    myPosts:"Mis publicaciones", myProps:"Mis propuestas", nothing:"Nada por aquí todavía.",
    whoAreYou:"¿Quién eres? (demo)", whoText:"Cambia de usuario para probar los dos lados: el autor y el colaborador.",
    newUser:"Nombre nuevo", add:"Agregar",
    chosenToast:"¡Escogida! Ahora ambos firman el acuerdo.", signedToast:"Firma registrada.",
    own:"Es tu publicación", alreadySent:"Ya enviaste una propuesta",
    ratedAvg:"promedio", sigNote:"Cada parte firma el texto del acuerdo con su wallet de Solana; el servidor verifica la firma.",
    needRuleFirst:"Acepta las reglas arriba para ver y escuchar las propuestas.",
    emptyList:"Todavía no hay publicaciones aquí. ¡Sé el primero!",
    stTitle:"Estudio: pruébalo antes de enviar", stSubBack:"Graba tu voz cantando tu letra mientras suena la música. Luego escucha la mezcla.", stSubMel:"Graba tu melodía cantando esta letra (o tarareando con tu instrumento). Luego escúchala.",
    stWriteFirst:"Escribe tu letra arriba y aquí la verás mientras cantas.", stRecOver:"Grabar sobre la música", stRecMel:"Grabar mi melodía", stStopRec:"Parar", stAgain:"Grabar otra vez",
    stListenMix:"Escuchar mezcla", stListen:"Escuchar", stStop:"Parar", stRecording:"Grabando…", stReady:"Lista", stDone:"Grabación lista. Escucha la mezcla.",
    stNoMic:"El micrófono no está disponible en esta vista. En la app instalada sí funciona. Mientras tanto, graba con tu teléfono y súbela aquí abajo.", stUpload:"o sube una grabación tuya",
    stVolM:"Volumen de la música", stVolV:"Volumen de tu voz", stSync:"Sincronía", stSyncHint:"Si tu voz se oye atrasada o adelantada, mueve esto hasta que cuadre.",
    stPhones:"Usa audífonos para que la música no se grabe junto con tu voz.", stBadFile:"No pude leer ese audio.", stNeedRec:"Graba o sube tu melodía primero.", stMixedBadge:"Voz + música",
    err:"Algo falló: ", loading:"Cargando…", uploading:"Subiendo…", nameTitle:"¿Cómo te llamas?", nameText:"Así te verán los demás compositores.", namePh:"Tu nombre artístico", save:"Guardar", editName:"Cambiar nombre",
    authErr:"No se pudo iniciar sesión. Revisa tu conexión e intenta de nuevo.", noAudio:"No se pudo cargar el audio",
    wSign:"Firmar con wallet", wSignAcct:"Firmar sin wallet", wAdd:"Añadir firma con wallet", wSigned:"Firmado con wallet", wSignedAcct:"Firmado",
    wPick:"Escoge tu wallet", wWillSign:"Vas a firmar este texto. Firmar es gratis, no mueve fondos:", wNone:"No encontré ninguna wallet de Solana en este navegador.",
    wOpenIn:"Abre Duetto dentro de tu wallet:", wAnchor:"Registrar en Solana", wAnchorCost:"Guarda la huella del acuerdo en Solana como prueba pública. Duetto paga la comisión; no necesitas SOL.", wWorking2:"Registrando en Solana…",
    wAnchored:"Registrado en Solana", wView:"Ver en Solscan", wWorking:"Esperando a la wallet…", wNeedAllWallet:"Cuando todos firmen con wallet, Duetto lo registra en Solana automáticamente.",
    wDone:"Firma verificada ✓", wAnchorDone:"¡Registrado en Solana!", wLoading:"Cargando wallets…",
    genres:["Bachata","Balada","Bolero","Merengue","Pop","Reguetón","Salsa","R&B","Rock","Otro"]
  },
  en:{
    needMusic:"Need music", needLyrics:"Need lyrics", all:"All",
    explore:"Explore", publish:"Post", mine:"Mine",
    demo:"Beta: posts are shared with everyone and agreements are signed with your Solana wallet.",
    chTag:"Weekly challenge", chTitle:"A chorus about the Caribbean Sea", chText:"Post your lyrics or melody tagged #sea. The most-voted proposal wins 100 SKR.",
    hasLyrics:"Has lyrics · needs music", hasMusic:"Has music · needs lyrics",
    proposals:"proposals", votes:"votes", open:"Open", closed:"Closed",
    by:"by", split:"Split", lyricsW:"Lyrics", musicW:"Music",
    unlockTitle:"Before you see the full work", unlockText:"By accepting you agree to these rules:",
    r1:"This work belongs to its author. You don't use it outside Duetto without a signed agreement.",
    r2:"If you're chosen, the split will be the one shown here.",
    r3:"Whatever you send is recorded with your name, fingerprint and date.",
    accept:"I accept, show me", cancel:"Cancel",
    seeFull:"See full", sendProp:"Send proposal", sendMelody:"Send my melody", sendLyrics:"Write my lyrics",
    propsTitle:"Proposals", noProps:"No proposals yet. Be the first!",
    choose:"Choose this", chosen:"Chosen", vote:"Vote", voted:"Voted",
    rateL:"Lyrics", rateM:"Melody", rateH:"Hook", comment:"Comment", commentPh:"Write constructive feedback…",
    back:"Back",
    newPost:"What do you have?", iHaveL:"I have lyrics", iHaveLs:"Looking for someone to write the music", iHaveM:"I have music", iHaveMs:"Looking for someone to write lyrics",
    title:"Title", genre:"Genre", mood:"Theme or idea", moodPh:"What it's about or what you're looking for…",
    lyrics:"Lyrics", lyricsPh:"Paste or write your lyrics here…",
    audio:"Audio (instrumental, melody or voice memo)", audioPick:"Tap to choose an audio file", audioHint:"Record with your phone's voice recorder and upload it here.",
    splitL:"What split do you propose?", you:"You", collab:"Collaborator",
    post:"Post and record fingerprint", needFields:"Fill in the title and the lyrics or audio.",
    posted:"Posted. Fingerprint recorded.",
    propTitleL:"Your melody for these lyrics", propTitleM:"Your lyrics for this music",
    note:"Note for the author", notePh:"Tell them your idea…",
    optAudio:"Audio of you singing it (optional)",
    agreeSplit:"I accept the split", sent:"Proposal sent and recorded.",
    agreement:"Co-writing agreement", signWith:"Sign with my wallet", signed:"Signed", pending:"Pending",
    switchTo:"Switch to this user to sign", allSigned:"Agreement complete. You can now register it together as co-writers.",
    fp:"Fingerprint (SHA-256)", date:"Date",
    myPosts:"My posts", myProps:"My proposals", nothing:"Nothing here yet.",
    whoAreYou:"Who are you? (demo)", whoText:"Switch users to try both sides: the author and the collaborator.",
    newUser:"New name", add:"Add",
    chosenToast:"Chosen! Now both sign the agreement.", signedToast:"Signature recorded.",
    own:"This is your post", alreadySent:"You already sent a proposal",
    ratedAvg:"average", sigNote:"Each party signs the agreement text with their Solana wallet; the server verifies the signature.",
    needRuleFirst:"Accept the rules above to hear and see proposals.",
    emptyList:"No posts here yet. Be the first!",
    stTitle:"Studio: try it before sending", stSubBack:"Record yourself singing your lyrics while the music plays. Then listen to the mix.", stSubMel:"Record your melody singing these lyrics (or humming with your instrument). Then listen back.",
    stWriteFirst:"Write your lyrics above and you'll see them here while you sing.", stRecOver:"Record over the music", stRecMel:"Record my melody", stStopRec:"Stop", stAgain:"Record again",
    stListenMix:"Listen to mix", stListen:"Listen", stStop:"Stop", stRecording:"Recording…", stReady:"Ready", stDone:"Recording ready. Listen to the mix.",
    stNoMic:"The microphone isn't available in this view. It works in the installed app. Meanwhile, record with your phone and upload it below.", stUpload:"or upload your own recording",
    stVolM:"Music volume", stVolV:"Your voice volume", stSync:"Sync", stSyncHint:"If your voice sounds late or early, move this until it lines up.",
    stPhones:"Use headphones so the music doesn't get recorded with your voice.", stBadFile:"Couldn't read that audio.", stNeedRec:"Record or upload your melody first.", stMixedBadge:"Voice + music",
    err:"Something failed: ", loading:"Loading…", uploading:"Uploading…", nameTitle:"What's your name?", nameText:"This is how other songwriters will see you.", namePh:"Your artist name", save:"Save", editName:"Change name",
    authErr:"Couldn't sign in. Check your connection and try again.", noAudio:"Couldn't load the audio",
    wSign:"Sign with wallet", wSignAcct:"Sign without wallet", wAdd:"Add wallet signature", wSigned:"Signed with wallet", wSignedAcct:"Signed",
    wPick:"Choose your wallet", wWillSign:"You're about to sign this text. Signing is free and moves no funds:", wNone:"I couldn't find a Solana wallet in this browser.",
    wOpenIn:"Open Duetto inside your wallet:", wAnchor:"Record on Solana", wAnchorCost:"Stores the agreement fingerprint on Solana as public proof. Duetto pays the fee; you don't need SOL.", wWorking2:"Recording on Solana…",
    wAnchored:"Recorded on Solana", wView:"View on Solscan", wWorking:"Waiting for the wallet…", wNeedAllWallet:"Once everyone signs with a wallet, Duetto records it on Solana automatically.",
    wDone:"Signature verified ✓", wAnchorDone:"Recorded on Solana!", wLoading:"Loading wallets…",
    genres:["Bachata","Ballad","Bolero","Merengue","Pop","Reggaeton","Salsa","R&B","Rock","Other"]
  }
};

/* ======================= i18n v2 additions ======================= */
Object.assign(T.es,{
  finished:"Terminadas", tabLyrics:"Letras", tabMusic:"Músicas", hasSong:"Canción terminada · busca opiniones", iHaveS:"Tengo una canción terminada", iHaveSs:"Quiero opiniones antes de lanzarla",
  songAudio:"Tu canción (audio completo)", songLyricsOpt:"Letra (opcional, ayuda a criticar la letra)",
  reviews:"Críticas", reviewsN:"críticas", reviewsN1:"crítica", cats:{lyrics:"Letra",melody:"Melodía",voice:"Voz",production:"Producción / mezcla",hook:"Coro / gancho",commercial:"Potencial comercial"},
  change:"¿Qué cambiarías?", changePh:"Sé específico: qué parte y cómo la mejorarías…", best:"Lo que más te gustó (opcional)",
  sendReview:"Enviar crítica", updateReview:"Actualizar mi crítica", yourReview:"Tu crítica", reviewSent:"¡Gracias por tu crítica!", rateAtLeast:"Califica al menos una categoría con estrellas.",
  changeShort:"Escribe qué cambiarías (al menos unas palabras).",
  markHere:"Comentar en", markTitle:"Comentar este momento", markPh:"¿Qué pasa en este momento de la canción?", marks:"Comentarios en la canción", noMarks:"Toca la onda o el botón para comentar un momento exacto.",
  songRules:"Puedes escucharla y opinar. No la descargues ni la uses fuera de Duetto sin permiso de su autor.",
  listenCritique:"Escuchar y criticar", summary:"Resumen de opiniones", overall:"Promedio general", listeners:"oyentes",
  retention:"¿Hasta dónde escuchan?", retentionHint:"% de oyentes que siguen escuchando en cada momento de tu canción.", noListens:"Todavía nadie la ha escuchado. Comparte tu canción para recibir opiniones.",
  biggestDrop:"Donde más se van:", changeLbl:"Cambiaría", bestLbl:"Lo mejor", noReviews:"Todavía no hay críticas. ¡Sé el primero!", ownSongHint:"Así verán tu canción. Las críticas y comentarios te llegarán como avisos.",
  demo:"Beta: comparte tus obras, firma acuerdos con tu wallet y regístralos en Solana.",
  search:"Buscar título, tema o autor…", allGenres:"Todos los géneros", allLangs:"Todos los idiomas",
  langNames:{es:"Español",en:"Inglés",pt:"Portugués",fr:"Francés",it:"Italiano",other:"Otro"}, songLang:"Idioma de la canción",
  noResults:"No hay resultados con esos filtros.",
  boosted:"Destacada", boostBtn:"Destacar", boostTitle:"Destacar tu publicación", boostText:"Tu publicación sale de primera en Explorar durante {h} horas.",
  tipBtn:"Propina", tipTitle:"Enviar una propina", tipText:"Va directo a la wallet de {n}. Duetto no cobra nada.", tipsLabel:"Propinas",
  payOpen:"Abrir mi wallet para pagar", payScan:"O escanea este código con la wallet de tu teléfono:", payDone:"Ya pagué", payChecking:"Buscando tu pago en Solana…",
  payOk:"¡Pago confirmado! Gracias.", payPending:"Todavía no veo el pago. Si ya lo enviaste, espera unos segundos y toca de nuevo.",
  payNoWallet:"Esta persona aún no vinculó una wallet, así que no puede recibir propinas todavía.",
  report:"Reportar", reportTitle:"Reportar contenido", reportUser:"Reportar a esta persona", reportWhy:"¿Qué pasa?",
  reasons:["Es spam","No es suyo / plagio","Ofensivo o acoso","Contenido sexual o ilegal","Otro"], reportMore:"Detalles (opcional)",
  reportSent:"Gracias. Lo revisaremos pronto.", alreadyReported:"Ya lo habías reportado.",
  block:"Bloquear", unblock:"Desbloquear", blocked:"Bloqueaste a esta persona. Ya no verás su contenido.", unblocked:"Desbloqueado.",
  hiddenMsg:"Oculto mientras se revisan reportes.", more:"Más opciones",
  notifs:"Avisos", noNotifs:"No tienes avisos todavía.", markAll:"Marcar todo como leído",
  nk:{proposal:"te envió una propuesta para",chosen:"escogió tu propuesta en",signed:"firmó el acuerdo de",anchored:"Quedó registrado en Solana el acuerdo de",comment:"comentó tu propuesta en",message:"te escribió sobre",tip:"te envió una propina en",review:"criticó tu canción",mark:"comentó un momento de"},
  pushOn:"Activar notificaciones", pushOnText:"Te avisamos cuando te llegue una propuesta, te escojan o te escriban.", pushEnabled:"Notificaciones activadas ✓",
  pushDenied:"Las notificaciones están bloqueadas en tu navegador. Actívalas en los ajustes del sitio.", pushUnsupported:"Este navegador no permite notificaciones.",
  account:"Tu cuenta", walletLinked:"Wallet vinculada", protect:"Proteger mi cuenta con mi wallet",
  protectText:"Si cambias de teléfono o borras datos, entras con tu wallet y recuperas todo.",
  restore:"¿Ya tienes cuenta? Entrar con mi wallet", restoreTitle:"Entrar con tu wallet", linkTitle:"Vincular tu wallet",
  linkSign:"Vas a firmar este texto para demostrar que la wallet es tuya. Es gratis:", linked:"¡Listo! Tu cuenta quedó protegida con tu wallet.",
  restored:"¡Bienvenido de vuelta, {n}! Recuperamos tu cuenta.",
  profile:"Perfil", editProfile:"Editar perfil", seeProfile:"Ver mi perfil", bio:"Sobre ti", bioPh:"Compositor de bachata desde La Romana…",
  genresLbl:"Tus géneros", photo:"Foto", changePhoto:"Cambiar foto", saved:"Guardado.",
  legalTitle:"Datos para la hoja de reparto (privados)", legalText:"Solo los ven tus coautores y salen en el PDF del acuerdo.",
  legalName:"Nombre legal", pro:"Sociedad de autores (SGACEDOM, ASCAP, BMI…)", ipi:"Número IPI / CAE (opcional)",
  stWorks:"obras", stDone:"acuerdos", stChosen:"propuestas escogidas", stTips:"en propinas",
  theirPosts:"Publicaciones", memberSince:"En Duetto desde",
  pdf:"Hoja de reparto (PDF)", pdfMaking:"Creando el PDF…",
  chat:"Chat con tu coautor", chatPh:"Escribe un mensaje…", send:"Enviar", noMsgs:"Empiecen a hablar de la canción 🎶",
  challenge:"Reto", challengeOf:"Reto de la semana", joinChallenge:"Participar en el reto", challengeEnds:"Termina", challengeEnded:"Terminó",
  challengePosts:"Obras del reto", ranking:"Ranking de propuestas", winner:"Ganador", setWinner:"Elegir ganador", noChallenge:"No hay reto activo ahora.",
  seeChallenge:"Ver el reto",
  admin:"Panel de administración", reports:"Reportes", noReports:"No hay reportes pendientes.", hide:"Ocultar", restoreBtn:"Restaurar", resolve:"Marcar revisado",
  newChallenge:"Nuevo reto", chTitleEs:"Título (español)", chTitleEn:"Título (inglés)", chBodyEs:"Descripción (español)", chBodyEn:"Descripción (inglés)",
  chTagL:"Etiqueta (sin #, ej. mar)", chPrize:"Premio (ej. 100 SKR)", chEnds:"Termina el", create:"Crear", challenges:"Retos", config:"Ajustes",
  boostPrice:"Precio para destacar", boostHours:"Horas", treasury:"Wallet que recibe los pagos de destacar", open:"Abrir",
  close:"Cerrar", cancel2:"Cancelar"
});
Object.assign(T.en,{
  finished:"Finished", tabLyrics:"Lyrics", tabMusic:"Music", hasSong:"Finished song · wants feedback", iHaveS:"I have a finished song", iHaveSs:"I want feedback before releasing it",
  songAudio:"Your song (full audio)", songLyricsOpt:"Lyrics (optional, helps people review them)",
  reviews:"Reviews", reviewsN:"reviews", reviewsN1:"review", cats:{lyrics:"Lyrics",melody:"Melody",voice:"Vocals",production:"Production / mix",hook:"Chorus / hook",commercial:"Commercial potential"},
  change:"What would you change?", changePh:"Be specific: which part and how you'd improve it…", best:"What you liked most (optional)",
  sendReview:"Send review", updateReview:"Update my review", yourReview:"Your review", reviewSent:"Thanks for your review!", rateAtLeast:"Rate at least one category with stars.",
  changeShort:"Write what you'd change (at least a few words).",
  markHere:"Comment at", markTitle:"Comment on this moment", markPh:"What's happening at this moment of the song?", marks:"Comments on the song", noMarks:"Tap the waveform or the button to comment on an exact moment.",
  songRules:"You can listen and give feedback. Don't download it or use it outside Duetto without the author's permission.",
  listenCritique:"Listen and review", summary:"Feedback summary", overall:"Overall average", listeners:"listeners",
  retention:"How far do people listen?", retentionHint:"% of listeners still listening at each moment of your song.", noListens:"Nobody has listened yet. Share your song to get feedback.",
  biggestDrop:"Biggest drop-off:", changeLbl:"Would change", bestLbl:"Best part", noReviews:"No reviews yet. Be the first!", ownSongHint:"This is how others see your song. Reviews and comments will reach you as notifications.",
  demo:"Beta: share your works, sign agreements with your wallet and record them on Solana.",
  search:"Search title, theme or author…", allGenres:"All genres", allLangs:"All languages",
  langNames:{es:"Spanish",en:"English",pt:"Portuguese",fr:"French",it:"Italian",other:"Other"}, songLang:"Song language",
  noResults:"No results with those filters.",
  boosted:"Featured", boostBtn:"Feature", boostTitle:"Feature your post", boostText:"Your post shows first in Explore for {h} hours.",
  tipBtn:"Tip", tipTitle:"Send a tip", tipText:"It goes straight to {n}'s wallet. Duetto takes nothing.", tipsLabel:"Tips",
  payOpen:"Open my wallet to pay", payScan:"Or scan this code with your phone wallet:", payDone:"I've paid", payChecking:"Looking for your payment on Solana…",
  payOk:"Payment confirmed! Thank you.", payPending:"I can't see the payment yet. If you sent it, wait a few seconds and tap again.",
  payNoWallet:"This person hasn't linked a wallet yet, so they can't receive tips.",
  report:"Report", reportTitle:"Report content", reportUser:"Report this person", reportWhy:"What's wrong?",
  reasons:["Spam","Not theirs / plagiarism","Offensive or harassment","Sexual or illegal content","Other"], reportMore:"Details (optional)",
  reportSent:"Thanks. We'll review it soon.", alreadyReported:"You already reported this.",
  block:"Block", unblock:"Unblock", blocked:"You blocked this person. You won't see their content.", unblocked:"Unblocked.",
  hiddenMsg:"Hidden while reports are reviewed.", more:"More options",
  notifs:"Notifications", noNotifs:"No notifications yet.", markAll:"Mark all as read",
  nk:{proposal:"sent you a proposal for",chosen:"chose your proposal in",signed:"signed the agreement for",anchored:"Recorded on Solana: the agreement for",comment:"commented on your proposal in",message:"wrote to you about",tip:"sent you a tip on",review:"reviewed your song",mark:"commented on a moment of"},
  pushOn:"Turn on notifications", pushOnText:"We'll let you know when you get a proposal, get chosen or get a message.", pushEnabled:"Notifications on ✓",
  pushDenied:"Notifications are blocked in your browser. Enable them in the site settings.", pushUnsupported:"This browser doesn't support notifications.",
  account:"Your account", walletLinked:"Linked wallet", protect:"Protect my account with my wallet",
  protectText:"If you change phones or clear data, sign in with your wallet and get everything back.",
  restore:"Already have an account? Sign in with my wallet", restoreTitle:"Sign in with your wallet", linkTitle:"Link your wallet",
  linkSign:"You'll sign this text to prove the wallet is yours. It's free:", linked:"Done! Your account is now protected by your wallet.",
  restored:"Welcome back, {n}! Your account is restored.",
  profile:"Profile", editProfile:"Edit profile", seeProfile:"View my profile", bio:"About you", bioPh:"Bachata songwriter from La Romana…",
  genresLbl:"Your genres", photo:"Photo", changePhoto:"Change photo", saved:"Saved.",
  legalTitle:"Split sheet details (private)", legalText:"Only your co-writers see these, on the agreement PDF.",
  legalName:"Legal name", pro:"Performing rights org (ASCAP, BMI, SGACEDOM…)", ipi:"IPI / CAE number (optional)",
  stWorks:"works", stDone:"agreements", stChosen:"proposals chosen", stTips:"in tips",
  theirPosts:"Posts", memberSince:"On Duetto since",
  pdf:"Split sheet (PDF)", pdfMaking:"Creating the PDF…",
  chat:"Chat with your co-writer", chatPh:"Write a message…", send:"Send", noMsgs:"Start talking about the song 🎶",
  challenge:"Challenge", challengeOf:"Weekly challenge", joinChallenge:"Join the challenge", challengeEnds:"Ends", challengeEnded:"Ended",
  challengePosts:"Challenge works", ranking:"Proposal ranking", winner:"Winner", setWinner:"Pick winner", noChallenge:"No active challenge right now.",
  seeChallenge:"See the challenge",
  admin:"Admin panel", reports:"Reports", noReports:"No pending reports.", hide:"Hide", restoreBtn:"Restore", resolve:"Mark reviewed",
  newChallenge:"New challenge", chTitleEs:"Title (Spanish)", chTitleEn:"Title (English)", chBodyEs:"Description (Spanish)", chBodyEn:"Description (English)",
  chTagL:"Tag (no #, e.g. sea)", chPrize:"Prize (e.g. 100 SKR)", chEnds:"Ends on", create:"Create", challenges:"Challenges", config:"Settings",
  boostPrice:"Feature price", boostHours:"Hours", treasury:"Wallet that receives feature payments", open:"Open",
  close:"Close", cancel2:"Cancel"
});

let lang = load("duetto_lang","es");
const t = k => T[lang][k] ?? k;
function load(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}}
function save(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
/* ======================= helpers ======================= */
const uid=()=>Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const COLORS=["#ff8fa8","#ffc38a","#9e91ff","#6fe0c6","#ffe08a","#8ad4ff","#d79bff","#a6e88a"];
const color=n=>COLORS[[...(n||"?")].reduce((a,c)=>a+c.charCodeAt(0),0)%COLORS.length];
const ini=n=>(n||"?").split(/\s+/).map(w=>w[0]).join("").slice(0,2).toUpperCase();
const av=(n,path,size)=>`<span class="av" ${size?`style="width:${size}px;height:${size}px;font-size:${Math.round(size/2.4)}px;background:${color(n)}"`:`style="background:${color(n)}"`} ${path?`data-avatar="${esc(path)}"`:""}>${esc(ini(n))}</span>`;
function ago(ts){const s=(Date.now()-ts)/1000;const L=lang==="es";if(s<60)return L?"ahora":"now";const m=s/60;if(m<60)return Math.floor(m)+(L?" min":"m");const h=m/60;if(h<24)return Math.floor(h)+" h";const d=h/24;return Math.floor(d)+(L?" d":"d")}
function fdate(ts){return new Date(ts).toLocaleString(lang==="es"?"es-DO":"en-US",{dateStyle:"medium",timeStyle:"short"})}
function fday(ts){return new Date(ts).toLocaleDateString(lang==="es"?"es-DO":"en-US",{dateStyle:"medium"})}
async function sha(data){try{const buf=typeof data==="string"?new TextEncoder().encode(data):await data.arrayBuffer();const h=await crypto.subtle.digest("SHA-256",buf);return [...new Uint8Array(h)].map(b=>b.toString(16).padStart(2,"0")).join("")}catch(e){return "no-disponible-"+uid()}}
function toast(msg){const d=document.createElement("div");d.className="toast";d.textContent=msg;document.body.appendChild(d);setTimeout(()=>d.remove(),3200)}
function sheet(html){const m=document.getElementById("modal");m.innerHTML=`<div class="overlay" id="ov"><div class="sheet">${html}</div></div>`;document.getElementById("ov").onclick=e=>{if(e.target.id==="ov")closeSheet()};hydrateImages(m)}
let onSheetClose=null;
function closeSheet(){try{stopAll()}catch(e){}if(onSheetClose){try{onSheetClose()}catch(e){}onSheetClose=null}document.getElementById("modal").innerHTML=""}
function loadScript(src){return new Promise((res,rej)=>{if(document.querySelector(`script[src="${src}"]`))return res();const s=document.createElement("script");s.src=src;s.onload=res;s.onerror=()=>rej(new Error("No se pudo cargar "+src));document.head.appendChild(s)})}
const short=w=>w?w.slice(0,4)+"…"+w.slice(-4):"";
const plural=(n,s)=>n+" "+s;

/* ======================= backend (Supabase) ======================= */
const SB_URL="https://ddrnkqmnoxknyotgbbnn.supabase.co";
const SB_KEY="sb_publishable_tcoDxnXwHuf7B9cuNe1p4Q_eRkLmJNS";
const VAPID_PUBLIC="BNw4vs0s4hPN2it6TCNQzp9wRI90X59b4gYyAvSg51KPLFqbSniGJP5dCblK7pJ_EmxS2oz1ouluFRbOZQeQ2d0";
const sb=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true,storageKey:"duetto-auth"}});
const BUCKET="duetto";
let me=null, meName="", myProfile=null, isAdmin=false;
let feed=[], myUnlocks=new Set(), myPropPosts=new Set(), myBlocks=new Set(), detail=null, loading=true;
let challenges=[], unread=0, profileView=null, notifList=[], adminData=null, config={};
let view={tab:"all",page:"explore",postId:null,userId:null,q:"",genre:"",lang:""};
const urlCache=new Map();
const POST_SELECT="*, author:duetto_profiles(name,avatar_path)";

function fail(error){console.error(error);toast(t("err")+(error?.message||error));}
function mapPost(r){return{id:r.id,type:r.type,authorId:r.author_id,author:r.author?.name||"—",authorAvatar:r.author?.avatar_path||null,title:r.title,genre:r.genre||"",mood:r.mood||"",
  preview:r.preview||"",audioPath:r.audio_path,split:r.split,hash:r.hash,status:r.status,chosenId:r.chosen_id,lang:r.lang||"es",hidden:!!r.hidden,
  challengeId:r.challenge_id,boostedUntil:r.boosted_until?Date.parse(r.boosted_until):0,
  proposalCount:r.proposal_count,voteCount:r.vote_count,reviewCount:r.review_count||0,ratingAvg:r.rating_avg!=null?Number(r.rating_avg):null,createdAt:Date.parse(r.created_at)}}
const canSee=p=>p&&(p.authorId===me||myUnlocks.has(p.id));
const isBoosted=p=>p.boostedUntil>Date.now();
const visible=(hidden,authorId)=>!myBlocks.has(authorId)&&(!hidden||authorId===me||isAdmin);

async function signedUrl(path){
  const c=urlCache.get(path);if(c&&c.exp>Date.now())return c.url;
  const {data,error}=await sb.storage.from(BUCKET).createSignedUrl(path,3600);if(error)throw error;
  urlCache.set(path,{url:data.signedUrl,exp:Date.now()+55*60e3});return data.signedUrl;
}
async function uploadFile(blob){
  const type=(blob.type||"audio/wav").split(";")[0];
  const ext=type.includes("wav")?"wav":type.includes("webm")?"webm":type.includes("mp4")||type.includes("m4a")||type.includes("aac")?"m4a":type.includes("ogg")?"ogg":type.includes("mpeg")||type.includes("mp3")?"mp3":type.includes("jpeg")?"jpg":type.includes("png")?"png":type.includes("webp")?"webp":"bin";
  const path=`u/${me}/${crypto.randomUUID()}.${ext}`;
  const {error}=await sb.storage.from(BUCKET).upload(path,blob,{contentType:type,upsert:false});
  if(error)throw error;return path;
}
const uploadAudio=uploadFile;
const pushFlush=()=>{sb.functions.invoke("duetto-push",{body:{}}).catch(()=>{})};
async function callWalletFn(body){
  const {data,error}=await sb.functions.invoke("duetto-wallet",{body});
  if(error){let msg=error.message;try{msg=(await error.context.json()).error||msg}catch(e){}throw new Error(msg)}
  return data;
}

async function loadMe(){
  const [prof,adm,blk,cfg]=await Promise.all([
    sb.from("duetto_profiles").select("*").eq("id",me).maybeSingle(),
    sb.rpc("duetto_am_i_admin"),
    sb.from("duetto_blocks").select("blocked"),
    sb.from("duetto_config").select("key,value")
  ]);
  myProfile=prof.data||null;meName=myProfile?.name||"";isAdmin=!!adm.data;
  myBlocks=new Set((blk.data||[]).map(x=>x.blocked));
  config=Object.fromEntries((cfg.data||[]).map(x=>[x.key,x.value]));
}
async function loadFeed(){
  const [posts,unl,props,ch]=await Promise.all([
    sb.from("duetto_posts").select(POST_SELECT).order("created_at",{ascending:false}).limit(300),
    sb.from("duetto_unlocks").select("post_id"),
    sb.from("duetto_proposals").select("post_id").eq("author_id",me),
    sb.from("duetto_challenges").select("*").order("ends_at",{ascending:false}).limit(20)
  ]);
  if(posts.error)return fail(posts.error);
  feed=posts.data.map(mapPost);
  myUnlocks=new Set((unl.data||[]).map(x=>x.post_id));
  myPropPosts=new Set((props.data||[]).map(x=>x.post_id));
  challenges=ch.data||[];
  refreshUnread();
}
const activeChallenge=()=>challenges.find(c=>Date.parse(c.starts_at)<=Date.now()&&Date.parse(c.ends_at)>Date.now());
const chTitle=c=>lang==="en"&&c.title_en?c.title_en:c.title_es;
const chBody=c=>lang==="en"&&c.body_en?c.body_en:(c.body_es||"");
async function refreshUnread(){
  const {count}=await sb.from("duetto_notifications").select("id",{count:"exact",head:true}).eq("read",false);
  unread=count||0;const b=document.getElementById("bellN");if(b){b.textContent=unread>9?"9+":unread;b.style.display=unread?"grid":"none"}
}
async function loadDetail(pid){
  const {data:row,error}=await sb.from("duetto_posts").select(POST_SELECT).eq("id",pid).maybeSingle();
  if(error)return fail(error);if(!row){detail=null;return}
  const p=mapPost(row);const i=feed.findIndex(x=>x.id===pid);if(i>=0)feed[i]=p;
  const [pr,ag,ct,tips]=await Promise.all([
    sb.from("duetto_proposals").select("*, author:duetto_profiles(name,avatar_path), votes:duetto_votes(user_id), ratings:duetto_ratings(user_id,l,m,h), comments:duetto_comments(id,body,hidden,created_at,user_id,user:duetto_profiles(name))").eq("post_id",pid).order("created_at"),
    sb.from("duetto_agreements").select("*, sigs:duetto_signatures(user_id,signed_at,method,wallet,sig)").eq("post_id",pid).maybeSingle(),
    canSee(p)&&p.type!=="music"?sb.from("duetto_post_content").select("text").eq("post_id",pid).maybeSingle():Promise.resolve({data:null}),
    sb.from("duetto_payments").select("proposal_id,symbol,amount").eq("post_id",pid).eq("status","confirmed").eq("kind","tip")
  ]);
  if(pr.error)fail(pr.error);
  p.text=ct.data?.text||null;
  if(p.type==="song")await loadSongExtras(p);
  const tipMap={};(tips.data||[]).forEach(x=>{const k=x.proposal_id||"post";tipMap[k]=tipMap[k]||{};tipMap[k][x.symbol]=(tipMap[k][x.symbol]||0)+Number(x.amount)});
  p.tips=tipMap.post||{};
  p.proposals=(pr.data||[]).map(x=>({id:x.id,authorId:x.author_id,author:x.author?.name||"—",authorAvatar:x.author?.avatar_path||null,text:x.text,audioPath:x.audio_path,mixed:x.mixed,note:x.note,hidden:!!x.hidden,
    hash:x.hash,createdAt:Date.parse(x.created_at),votes:(x.votes||[]).map(v=>v.user_id),tips:tipMap[x.id]||{},
    ratings:Object.fromEntries((x.ratings||[]).map(r=>[r.user_id,{l:r.l,m:r.m,h:r.h}])),
    comments:(x.comments||[]).filter(c=>visible(c.hidden,c.user_id)).map(c=>({id:c.id,uid:c.user_id,hidden:c.hidden,u:c.user?.name||"—",c:c.body,ts:Date.parse(c.created_at)})).sort((a,b)=>a.ts-b.ts)}))
    .filter(x=>visible(x.hidden,x.authorId));
  p.agreement=ag.data?{id:ag.data.id,parties:ag.data.parties,hash:ag.data.hash,message:ag.data.message,anchorTx:ag.data.anchor_tx,anchoredAt:ag.data.anchored_at?Date.parse(ag.data.anchored_at):0,createdAt:Date.parse(ag.data.created_at),
    sigs:Object.fromEntries((ag.data.sigs||[]).map(s=>[s.user_id,{at:Date.parse(s.signed_at),method:s.method,wallet:s.wallet,sig:s.sig}]))}:null;
  detail=p;
}

/* ======================= render shell ======================= */
const ICON={
  explore:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>',
  mine:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>',
  dots:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>'
};
function render(keepScroll){
  document.documentElement.lang=lang;
  document.getElementById("langBtn").textContent=lang==="es"?"EN":"ES";
  document.getElementById("userBtn").innerHTML=meName?av(meName,myProfile?.avatar_path)+esc(meName):"…";
  const tabs=document.getElementById("tabs");
  tabs.style.display=view.page==="explore"?"block":"none";
  tabs.innerHTML=`<div class="row" style="flex-wrap:nowrap;gap:8px">${[["all","a",t("all")],["lyrics","l","✎ "+t("tabLyrics")],["music","m","♪ "+t("tabMusic")],["song","s","🎧 "+t("finished")]]
    .map(([k,c,l])=>`<button class="tab ${c} ${view.tab===k?"on":""}" data-tab="${k}">${l}</button>`).join("")}</div>
    <div class="filters"><input id="q" type="search" placeholder="${t("search")}" value="${esc(view.q)}">
    <select id="fGenre"><option value="">${t("allGenres")}</option>${T[lang].genres.map((g,i)=>`<option value="${esc(T.es.genres[i])}" ${view.genre===T.es.genres[i]?"selected":""}>${esc(g)}</option>`).join("")}</select>
    <select id="fLang"><option value="">${t("allLangs")}</option>${Object.entries(T[lang].langNames).map(([k,v])=>`<option value="${k}" ${view.lang===k?"selected":""}>${esc(v)}</option>`).join("")}</select></div>`;
  document.getElementById("nav").innerHTML=`
    <button data-nav="explore" class="${["explore","post","challenge","profile"].includes(view.page)?"on":""}">${ICON.explore}${t("explore")}</button>
    <button data-nav="new"><span class="plus">${ICON.plus}</span></button>
    <button data-nav="mine" class="${["mine","notifs","admin"].includes(view.page)?"on":""}">${ICON.mine}${t("mine")}</button>`;
  const m=document.getElementById("main");const y=window.scrollY;
  if(loading)m.innerHTML=`<div class="empty">${t("loading")}</div>`;
  else if(view.page==="explore")m.innerHTML=renderExplore();
  else if(view.page==="post")m.innerHTML=renderPost(detail);
  else if(view.page==="new")m.innerHTML=renderNew();
  else if(view.page==="mine")m.innerHTML=renderMine();
  else if(view.page==="profile")m.innerHTML=renderProfile();
  else if(view.page==="notifs")m.innerHTML=renderNotifs();
  else if(view.page==="challenge")m.innerHTML=renderChallenge();
  else if(view.page==="admin")m.innerHTML=renderAdmin();
  hydrateAudio();hydrateImages(m);refreshUnread();
  window.scrollTo(0,keepScroll?y:0);
}
function hashFor(){return view.page==="post"?"post-"+view.postId:view.page==="profile"?"perfil-"+view.userId:view.page==="explore"?"":view.page==="challenge"?"reto":view.page==="notifs"?"avisos":view.page}
async function go(page,extra={}){
  Object.assign(view,{page},extra);
  const h=hashFor();try{if(location.hash.slice(1)!==h)history.replaceState(null,"",h?"#"+h:location.pathname)}catch(e){}
  loading=true;render();
  try{
    if(page==="post")await loadDetail(view.postId);
    else if(page==="profile")await loadProfile(view.userId);
    else if(page==="notifs")await loadNotifs();
    else if(page==="admin")await loadAdmin();
    else if(page==="challenge"||page==="explore"||page==="mine")await loadFeed();
  }catch(e){fail(e)}
  loading=false;render();
}
async function refreshDetail(){await loadDetail(view.postId);render(true)}

/* ======================= views ======================= */
function postCard(p){
  if(p.type==="song")return songCard(p);
  const isL=p.type==="lyrics";
  const ch=p.challengeId&&challenges.find(c=>c.id===p.challengeId);
  return `<div class="card click ${isBoosted(p)?"boost":""}" data-open="${p.id}">
    <div class="row between"><span class="badge ${isL?"l":"m"}">${isL?"✎ "+t("hasLyrics"):"♪ "+t("hasMusic")}</span>
    <span class="row" style="gap:6px">${isBoosted(p)?`<span class="badge o">⭐ ${t("boosted")}</span>`:""}${p.status==="closed"?`<span class="badge c">✓ ${t("closed")}</span>`:""}</span></div>
    <div class="ptitle">${esc(p.title)}</div>
    <div class="meta">${t("by")} ${esc(p.author)} · ${esc(p.genre)} · ${esc(T[lang].langNames[p.lang]||"")} · ${ago(p.createdAt)}</div>
    ${p.hidden?`<div class="hiddenmsg">🚩 ${t("hiddenMsg")}</div>`:""}
    ${ch?`<div class="meta" style="margin-top:6px">🏆 #${esc(ch.tag)}</div>`:""}
    ${p.mood?`<div style="font-size:13.5px;margin-top:6px;color:#d8d2e8">${esc(p.mood)}</div>`:""}
    ${isL?`<div class="lyrics locked">${esc(p.preview)}</div>`:(canSee(p)&&p.audioPath?`<div data-audio="${esc(p.audioPath)}"></div>`:`<div class="lyrics locked" style="font-family:Inter;font-size:14px;color:var(--muted)">♪ ••• ••• ••• •••\n♪ ••• •••</div>`)}
    <div class="stats"><span>💬 ${p.proposalCount} ${t("proposals")}</span><span>▲ ${p.voteCount} ${t("votes")}</span><span>${t("split")} ${isL?p.split:100-p.split}/${isL?100-p.split:p.split}</span></div>
  </div>`;
}
function filteredFeed(){
  const q=view.q.trim().toLowerCase();
  return feed.filter(p=>visible(p.hidden,p.authorId)&&(view.tab==="all"||p.type===view.tab)&&(!view.genre||p.genre===view.genre||T.en.genres[T.es.genres.indexOf(view.genre)]===p.genre)&&(!view.lang||p.lang===view.lang)
    &&(!q||[p.title,p.mood,p.author,p.genre].some(s=>(s||"").toLowerCase().includes(q))))
    .sort((a,b)=>(isBoosted(b)-isBoosted(a))||(b.createdAt-a.createdAt));
}
function challengeBanner(){
  const c=activeChallenge();if(!c)return "";
  const days=Math.max(0,Math.ceil((Date.parse(c.ends_at)-Date.now())/86400e3));
  return `<div class="challenge click" data-nav="challenge"><small>${t("chTag")}${c.prize?" · 🏆 "+esc(c.prize):""}</small><h3>${esc(chTitle(c))}</h3><p>${esc(chBody(c))}</p>
    <p class="meta" style="color:#f2d9e3;margin-top:6px">#${esc(c.tag)} · ${t("challengeEnds")} ${lang==="es"?"en":"in"} ${days} ${lang==="es"?"días":"days"} · ${t("seeChallenge")} →</p></div>`;
}
function renderExplore(){
  const list=filteredFeed();
  const filtering=view.q||view.genre||view.lang;
  return `
  
  ${list.length?list.map(postCard).join(""):`<div class="empty">${filtering?t("noResults"):t("emptyList")}<br><br><button class="btn pri" data-nav="new">＋ ${t("publish")}</button></div>`}
  <div class="meta" style="text-align:center;margin:22px 0 6px"><a href="terms.html" style="color:inherit">${lang==="es"?"Términos":"Terms"}</a> · <a href="privacy.html" style="color:inherit">${lang==="es"?"Privacidad":"Privacy"}</a> · soporte@duettosongs.com</div>`;
}
function splitBar(p){
  const lp=p.type==="lyrics"?p.split:100-p.split, mp=100-lp;
  return `<div class="split"><div style="width:${lp}%"></div><div style="width:${mp}%"></div></div>
  <div class="row between meta"><span>✎ ${t("lyricsW")} ${lp}%</span><span>♪ ${t("musicW")} ${mp}%</span></div>`;
}
function stars(val,attr){return `<div class="stars">${[1,2,3,4,5].map(i=>`<button class="star ${i<=val?"on":""}" ${attr} data-v="${i}">★</button>`).join("")}</div>`}
function avg(r,k){const v=Object.values(r).map(x=>x[k]).filter(Boolean);return v.length?(v.reduce((a,b)=>a+b,0)/v.length).toFixed(1):"–"}
const tipText=tp=>Object.entries(tp||{}).map(([s,a])=>`${+a.toFixed(2)} ${s}`).join(" · ");
const moreBtn=(type,id,uid,name)=>`<button class="iconbtn" title="${t("more")}" data-more="${type}|${id}|${uid}|${esc(name)}">${ICON.dots}</button>`;
function renderPost(p){
  if(p&&p.type==="song")return renderSong(p);
  if(!p)return `<button class="back" data-nav="explore">← ${t("back")}</button><div class="empty">—</div>`;
  const isL=p.type==="lyrics", owner=p.authorId===me, unlocked=canSee(p);
  const mine=p.proposals.find(x=>x.authorId===me);
  const ch=p.challengeId&&challenges.find(c=>c.id===p.challengeId);
  let html=`<button class="back" data-nav="explore">← ${t("back")}</button>
  <div class="card ${isBoosted(p)?"boost":""}">
    <div class="row between"><span class="badge ${isL?"l":"m"}">${isL?"✎ "+t("hasLyrics"):"♪ "+t("hasMusic")}</span>${owner?"":moreBtn("post",p.id,p.authorId,p.author)}</div>
    <div class="ptitle" style="font-size:26px">${esc(p.title)}</div>
    <div class="row meta click" style="margin-top:4px" data-user="${p.authorId}">${av(p.author,p.authorAvatar)} <u>${esc(p.author)}</u> · ${esc(p.genre)} · ${esc(T[lang].langNames[p.lang]||"")} · ${ago(p.createdAt)}</div>
    ${p.hidden?`<div class="hiddenmsg">🚩 ${t("hiddenMsg")}</div>`:""}
    ${ch?`<div class="meta click" style="margin-top:8px" data-nav="challenge">🏆 ${t("challenge")} #${esc(ch.tag)} →</div>`:""}
    ${p.mood?`<p style="margin-top:10px;font-size:14px">${esc(p.mood)}</p>`:""}
    ${isL?`<div class="lyrics ${p.text?"":"locked"}">${esc(p.text||p.preview)}</div>`
         :(unlocked&&p.audioPath?`<div data-audio="${esc(p.audioPath)}"></div>`:`<div class="lyrics locked" style="font-family:Inter;font-size:14px;color:var(--muted)">♪ ••• ••• ••• •••\n♪ ••• •••</div>`)}
    <div style="margin-top:12px">${splitBar(p)}</div>
    <div class="hash">${t("fp")}: ${esc(p.hash.slice(0,32))}…<br>${t("date")}: ${fdate(p.createdAt)}</div>
    ${tipText(p.tips)?`<div class="meta" style="margin-top:8px">💸 ${t("tipsLabel")}: ${esc(tipText(p.tips))}</div>`:""}
    <div style="margin-top:12px">
    ${owner?`<div class="row between"><span class="meta">${t("own")}</span>${p.status==="open"?`<button class="btn sec" data-boost="${p.id}">⭐ ${isBoosted(p)?t("boosted")+" · +":""}${t("boostBtn")}</button>`:""}</div>`
      :!unlocked?`<button class="btn pri full" data-unlock="${p.id}">🔓 ${t("seeFull")}</button>`
      :p.status==="closed"?`<button class="btn sec" data-tip="post|${p.id}|${esc(p.author)}">💸 ${t("tipBtn")}</button>`
      :mine?`<div class="meta">✓ ${t("alreadySent")}</div>`
      :`<button class="btn pri full" data-propose="${p.id}">${isL?"♪ "+t("sendMelody"):"✎ "+t("sendLyrics")}</button>`}
    </div>
  </div>`;
  if(p.agreement)html+=renderAgreement(p);
  html+=`<div class="sect">${t("propsTitle")} (${unlocked?p.proposals.length:p.proposalCount})</div>`;
  if(!unlocked&&p.proposalCount)html+=`<div class="meta" style="padding:6px 2px 10px">🔒 ${t("needRuleFirst")}</div>`;
  if(unlocked&&!p.proposals.length)html+=`<div class="empty" style="padding:16px">${t("noProps")}</div>`;
  [...p.proposals].sort((a,b)=>b.votes.length-a.votes.length).forEach(x=>{
    const myR=x.ratings[me]||{l:0,m:0,h:0}, voted=x.votes.includes(me), chosen=p.chosenId===x.id, own=x.authorId===me;
    const winner=ch&&ch.winner_proposal_id===x.id;
    html+=`<div class="prop ${chosen?"chosen":""}">
      <div class="row between"><div class="row click" data-user="${x.authorId}">${av(x.author,x.authorAvatar)}<b>${esc(x.author)}</b><span class="meta">· ${ago(x.createdAt)}</span></div>
      <div class="row" style="gap:6px">${winner?`<span class="badge o">🏆 ${t("winner")}</span>`:""}${chosen?`<span class="badge c">✓ ${t("chosen")}</span>`:""}${own?"":moreBtn("proposal",x.id,x.authorId,x.author)}</div></div>
      ${x.hidden?`<div class="hiddenmsg">🚩 ${t("hiddenMsg")}</div>`:""}
      ${x.mixed?`<span class="badge m" style="margin-top:8px">🎙 ${t("stMixedBadge")}</span>`:""}
      ${x.note?`<p style="font-size:14px;margin-top:8px">${esc(x.note)}</p>`:""}
      ${x.text?`<div class="lyrics" style="background:#15121f">${esc(x.text)}</div>`:""}${x.audioPath?`<div data-audio="${esc(x.audioPath)}"></div>`:""}
      <div class="hash">${t("fp")}: ${esc(x.hash.slice(0,24))}… · ${fdate(x.createdAt)}</div>
      ${tipText(x.tips)?`<div class="meta" style="margin-top:6px">💸 ${esc(tipText(x.tips))}</div>`:""}
      <div class="row between" style="margin-top:10px">
        <div class="row" style="gap:6px"><button class="btn sec" data-vote="${x.id}" ${own?"disabled":""}>▲ ${voted?t("voted"):t("vote")} · ${x.votes.length}</button>
        ${own?"":`<button class="btn sec" data-tip="proposal|${x.id}|${esc(x.author)}">💸</button>`}</div>
        ${owner&&p.status==="open"?`<button class="btn pri" data-choose="${x.id}">${t("choose")}</button>`:""}
        ${isAdmin&&ch&&!owner?`<button class="btn ghost" data-winner="${ch.id}|${x.id}">🏆 ${t("setWinner")}</button>`:""}
      </div>
      ${!own?`<div class="rate">
        <span>${t("rateL")}</span>${stars(myR.l,`data-rate="${x.id}|l"`)}
        <span>${t("rateM")}</span>${stars(myR.m,`data-rate="${x.id}|m"`)}
        <span>${t("rateH")}</span>${stars(myR.h,`data-rate="${x.id}|h"`)}
      </div>`:""}
      <div class="meta" style="margin-top:6px">${t("ratedAvg")}: ${t("rateL")} ${avg(x.ratings,"l")} · ${t("rateM")} ${avg(x.ratings,"m")} · ${t("rateH")} ${avg(x.ratings,"h")}</div>
      ${x.comments.map(c=>`<div class="comment"><div class="row between"><span><b class="click" data-user="${c.uid}">${esc(c.u)}</b> <span class="meta">${ago(c.ts)}</span></span>${c.uid===me?"":moreBtn("comment",c.id,c.uid,c.u)}</div>${c.hidden?`<span class="meta">🚩 ${t("hiddenMsg")}</span><br>`:""}${esc(c.c)}</div>`).join("")}
      <form class="row" style="margin-top:8px;flex-wrap:nowrap" data-comment="${x.id}"><input name="c" placeholder="${t("commentPh")}" maxlength="500" style="padding:8px 10px"><button class="btn sec" style="padding:8px 12px">${t("comment")}</button></form>
    </div>`;
  });
  return html;
}
function renderAgreement(p){
  const a=p.agreement, done=a.parties.every(x=>a.sigs[x.id]), allW=a.parties.every(x=>a.sigs[x.id]?.method==="wallet"), party=a.parties.some(x=>x.id===me);
  return `<div class="card agree">
    <div class="row between"><b style="font-size:16px">📜 ${t("agreement")}</b>${a.anchorTx?`<span class="badge c">⛓ Solana</span>`:done?`<span class="badge c">✓</span>`:`<span class="badge o">${t("pending")}</span>`}</div>
    <div class="meta" style="margin-top:4px">“${esc(p.title)}” · ${fdate(a.createdAt)}</div>
    ${a.parties.map(x=>{const sg=a.sigs[x.id];return `<div class="sig"><span class="row click" data-user="${x.id}">${av(x.name)} ${esc(x.name)} · ${x.role==="l"?"✎ "+t("lyricsW"):"♪ "+t("musicW")} <b>${x.pct}%</b></span>
      <span style="text-align:right">${sg?(sg.method==="wallet"?`<span class="ok">✓ ${t("wSigned")}</span><br><a class="meta" href="https://solscan.io/account/${esc(sg.wallet)}" target="_blank" rel="noopener">◎ ${esc(short(sg.wallet))}</a>`:`<span class="ok">✓ ${t("wSignedAcct")}</span>`):`<span class="pend">${t("pending")}</span>`}</span>
    </div>
    ${x.id===me&&(!sg||sg.method!=="wallet")&&!a.anchorTx?`<div class="row" style="justify-content:flex-end;padding-bottom:8px;gap:6px">
       ${!sg?`<button class="btn ghost" style="font-size:13px" data-signacct="${a.id}">${t("wSignAcct")}</button>`:""}
       <button class="btn pri" style="padding:8px 12px" data-wsign="${a.id}">◎ ${sg?t("wAdd"):t("wSign")}</button></div>`:""}`}).join("")}
    <div class="hash">${t("fp")}: ${esc(a.hash)}</div>
    ${a.anchorTx?`<div class="anch">⛓ ${t("wAnchored")} · <a href="https://solscan.io/tx/${esc(a.anchorTx)}" target="_blank" rel="noopener">${t("wView")} ↗</a></div>`
      :allW&&party?`<button class="btn sec full" style="margin-top:10px" data-anchor="${a.id}">⛓ ${t("wAnchor")}</button><div class="hint">${t("wAnchorCost")}</div>`
      :`<div class="hint">${done&&!allW?t("wNeedAllWallet"):t("sigNote")}</div>`}
    ${done&&!a.anchorTx?`<div class="hint">✅ ${t("allSigned")}</div>`:""}
    ${party?`<div class="row" style="margin-top:12px;gap:8px"><button class="btn sec" style="flex:1" data-pdf="${a.id}">📄 ${t("pdf")}</button><button class="btn sec" style="flex:1" data-chat="${a.id}">💬 ${t("chat")}</button></div>`:""}
  </div>`;
}
let draft={type:"lyrics",split:50,genre:0,lang:"es",challenge:false};
function renderNew(){
  if(draft.type==="song")return renderNewSong();
  const isL=draft.type==="lyrics", ch=activeChallenge();
  return `<div class="sect" style="margin-top:4px">${t("newPost")}</div>
  <div class="typepick">
    <button class="tp l ${isL?"on":""}" data-type="lyrics"><b>✎ ${t("iHaveL")}</b><span>${t("iHaveLs")}</span></button>
    <button class="tp m ${!isL?"on":""}" data-type="music"><b>♪ ${t("iHaveM")}</b><span>${t("iHaveMs")}</span></button>
    <button class="tp s wide" data-type="song"><b>🎧 ${t("iHaveS")}</b><span>${t("iHaveSs")}</span></button>
  </div>
  <form id="newForm">
    <label>${t("title")}</label><input name="title" maxlength="80" value="${esc(draft.title||"")}">
    <div class="row" style="gap:10px;flex-wrap:nowrap"><div style="flex:1"><label>${t("genre")}</label><select name="genre">${T[lang].genres.map((g,i)=>`<option value="${i}" ${+draft.genre===i?"selected":""}>${g}</option>`).join("")}</select></div>
    <div style="flex:1"><label>${t("songLang")}</label><select name="lang">${Object.entries(T[lang].langNames).map(([k,v])=>`<option value="${k}" ${draft.lang===k?"selected":""}>${esc(v)}</option>`).join("")}</select></div></div>
    <label>${t("mood")}</label><input name="mood" placeholder="${t("moodPh")}" maxlength="140" value="${esc(draft.mood||"")}">
    ${isL?`<label>${t("lyrics")}</label><textarea name="text" placeholder="${t("lyricsPh")}" maxlength="6000" style="min-height:180px">${esc(draft.text||"")}</textarea>`
      :`<label>${t("audio")}</label><div class="file" id="fileBox">${draft.fileName?"🎵 "+esc(draft.fileName):"⬆ "+t("audioPick")}<input type="file" accept="audio/*" id="fileIn"></div><div class="hint">${t("audioHint")}</div>`}
    <label>${t("splitL")}</label>
    <div class="range"><input type="range" min="10" max="90" step="5" value="${draft.split}" id="splitIn"></div>
    <div class="row between meta" style="margin-top:4px"><span>${t("you")} (${isL?t("lyricsW"):t("musicW")}): <b id="sMe">${draft.split}%</b></span><span>${t("collab")}: <b id="sOt">${100-draft.split}%</b></span></div>
    ${ch?`<label class="row checkrow"><input type="checkbox" name="challenge" ${draft.challenge?"checked":""}> 🏆 ${t("joinChallenge")} #${esc(ch.tag)}${ch.prize?" · "+esc(ch.prize):""}</label>`:""}
    <button class="btn pri full" style="margin-top:20px" id="postBtn">${t("post")}</button>
  </form>`;
}
function renderMine(){
  const mp=feed.filter(p=>p.authorId===me), pr=feed.filter(p=>myPropPosts.has(p.id));
  const w=myProfile?.wallet;
  return `<div class="card click" data-user="${me}"><div class="row between"><div class="row">${av(meName||"?",myProfile?.avatar_path,46)}<div><b style="font-size:18px">${esc(meName)}</b><div class="meta">${t("seeProfile")} →</div></div></div></div></div>
  <div class="row" style="gap:8px;margin-bottom:12px"><button class="btn sec" style="flex:1" data-nav="notifs">🔔 ${t("notifs")}${unread?` (${unread})`:""}</button>${isAdmin?`<button class="btn sec" style="flex:1" data-nav="admin">🛠 Admin</button>`:""}</div>
  <div class="card"><b>🔐 ${t("account")}</b>
    ${w?`<div class="meta" style="margin-top:6px">${t("walletLinked")}: <a href="https://solscan.io/account/${esc(w)}" target="_blank" rel="noopener" style="color:inherit">◎ ${esc(short(w))}</a> ✓</div>`
      :`<p class="meta" style="margin-top:6px">${t("protectText")}</p><button class="btn pri full" style="margin-top:10px" data-link="1">◎ ${t("protect")}</button>`}
    <div id="pushBox" style="margin-top:12px">${pushBoxHTML()}</div>
  </div>
  <div class="sect">${t("myPosts")}</div>${mp.length?mp.map(postCard).join(""):`<div class="empty" style="padding:14px">${t("nothing")}</div>`}
  <div class="sect">${t("myProps")}</div>${pr.length?pr.map(postCard).join(""):`<div class="empty" style="padding:14px">${t("nothing")}</div>`}`;
}
async function hydrateAudio(){
  for(const el of document.querySelectorAll("[data-audio]")){
    const path=el.dataset.audio;
    try{const url=await signedUrl(path);const a=document.createElement("audio");a.controls=true;a.preload="metadata";a.src=url;el.replaceWith(a)}
    catch(e){el.innerHTML=`<div class="meta" style="margin-top:8px">♪ ${t("noAudio")}</div>`}
  }
}
async function hydrateImages(root){
  for(const el of (root||document).querySelectorAll("[data-avatar]")){
    const path=el.dataset.avatar;el.removeAttribute("data-avatar");
    signedUrl(path).then(u=>{el.style.backgroundImage=`url("${u}")`;el.classList.add("img");el.textContent=""}).catch(()=>{});
  }
}

/* ======================= actions: basics ======================= */
function unlockSheet(id){
  const p=detail;
  sheet(`<h3>${t("unlockTitle")}</h3><p>${t("unlockText")}</p>
  ${p.type==="song"?`<ul class="rules"><li>${t("songRules")}</li><li>${t("r3")}</li></ul>`:`<ul class="rules"><li>${t("r1")}</li><li>${t("r2")}</li><li>${t("r3")}</li></ul>
  ${splitBar(p)}`}
  <div class="row" style="margin-top:18px;flex-wrap:nowrap"><button class="btn sec" style="flex:1" data-close>${t("cancel")}</button><button class="btn pri" style="flex:2" data-dounlock="${id}">${t("accept")}</button></div>`);
}
function nameSheet(first){
  sheet(`<h3>${t("nameTitle")}</h3><p>${t("nameText")}</p>
  <form id="nameForm"><input name="n" maxlength="24" value="${esc(meName||"")}" placeholder="${t("namePh")}" autocomplete="nickname">
  <button class="btn pri full" style="margin-top:14px">${t("save")}</button></form>
  ${first?`<div style="text-align:center;margin-top:16px"><button class="btn ghost" data-restore="1">◎ ${t("restore")}</button></div>`:""}`);
  if(first){document.getElementById("ov").onclick=null}
  document.getElementById("nameForm").onsubmit=async e=>{e.preventDefault();const n=new FormData(e.target).get("n").trim();if(!n)return;
    const {error}=myProfile?await sb.from("duetto_profiles").update({name:n}).eq("id",me):await sb.from("duetto_profiles").insert({id:me,name:n});
    if(error)return fail(error);
    await loadMe();closeSheet();render(true)};
}
function requireName(){if(!meName){nameSheet(true);return false}return true}

/* ======================= wallet picker (sign agreement / link account) ======================= */
function pickWallet(title,desc,preview,onPick){
  const draw=()=>{
    const W=window.DuettoWallet, ws=W?W.list():[];
    const here=encodeURIComponent(location.href), ref=encodeURIComponent(location.origin);
    sheet(`<h3>${title}</h3><p>${desc}</p>
      ${preview?`<pre class="hash" style="white-space:pre-wrap;font-size:11.5px">${esc(preview)}</pre>`:""}
      <div class="sect" style="margin-top:14px">${t("wPick")}</div>
      <div class="userlist">${!W?`<div class="meta">${t("wLoading")}</div>`:ws.length?ws.map((w,i)=>`<button data-wpick="${i}"><img src="${esc(w.icon)}" alt="" style="width:28px;height:28px;border-radius:8px"> ${esc(w.name)}</button>`).join("")
        :`<p>${t("wNone")}</p><p>${t("wOpenIn")}</p>
          <div class="row"><a class="btn sec" href="https://phantom.app/ul/browse/${here}?ref=${ref}">Phantom</a><a class="btn sec" href="https://solflare.com/ul/v1/browse/${here}?ref=${ref}">Solflare</a></div>`}</div>
      <div class="meta" id="wStatus" style="margin-top:10px"></div>`);
    document.querySelectorAll("[data-wpick]").forEach(b=>b.onclick=async()=>{
      const st=document.getElementById("wStatus");const busy=on=>{document.querySelectorAll("[data-wpick]").forEach(x=>x.disabled=on);if(st)st.textContent=on?t("wWorking"):""};
      busy(true);try{await onPick(ws[+b.dataset.wpick])}catch(err){busy(false);fail(err)}});
  };
  draw();
  if(!window.DuettoWallet)window.addEventListener("duetto-wallet-ready",draw,{once:true});
  else window.DuettoWallet.onChange(()=>{if(document.querySelector(".userlist"))draw()});
}
function signAgreementSheet(agId){
  const a=detail.agreement;
  pickWallet("◎ "+t("wSign"),t("wWillSign"),a.message,async w=>{
    const r=await window.DuettoWallet.signMessage(w,a.message);
    const res=await callWalletFn({action:"sign",agreement_id:agId,...r});
    closeSheet();toast(res?.anchored?t("wAnchorDone"):res?.anchorError?res.anchorError:t("wDone"));pushFlush();await loadMe();await refreshDetail();
  });
}
function linkSheet(restore){
  const ts=Date.now();
  const msg=`Duetto - link wallet / vincular wallet\nAccount: ${me}\nTime: ${new Date(ts).toISOString()}`;
  pickWallet("◎ "+(restore?t("restoreTitle"):t("linkTitle")),t("linkSign"),msg,async w=>{
    const r=await window.DuettoWallet.signMessage(w,msg);
    const res=await callWalletFn({action:"link",ts,...r});
    closeSheet();
    await loadMe();
    toast(res.restored?t("restored").replace("{n}",res.name||meName):t("linked"));
    go(view.page==="post"?"explore":view.page);
  });
}

/* ======================= report & block ======================= */
function moreSheet(type,id,uid,name){
  const blocked=myBlocks.has(uid);
  sheet(`<h3>${esc(name)}</h3>
  <div class="userlist">
    <button data-report="${type}|${id}">🚩 ${t("report")}</button>
    ${uid!==me?`<button data-blockuser="${uid}|${esc(name)}">${blocked?"✅ "+t("unblock"):"⛔ "+t("block")} · ${esc(name)}</button>`:""}
    <button data-user="${uid}">👤 ${t("profile")} · ${esc(name)}</button>
    ${isAdmin&&type!=="user"?`<button data-adminhide="${type}|${id}|1">🛠 ${t("hide")}</button><button data-adminhide="${type}|${id}|0">🛠 ${t("restoreBtn")}</button>`:""}
  </div>`);
}
function reportSheet(type,id){
  sheet(`<h3>🚩 ${type==="user"?t("reportUser"):t("reportTitle")}</h3><p>${t("reportWhy")}</p>
  <form id="repForm">${T[lang].reasons.map((r,i)=>`<label class="row checkrow"><input type="radio" name="r" value="${esc(T.es.reasons[i])}" ${i===0?"checked":""}> ${esc(r)}</label>`).join("")}
  <label>${t("reportMore")}</label><input name="d" maxlength="200">
  <button class="btn pri full" style="margin-top:14px">${t("report")}</button></form>`);
  document.getElementById("repForm").onsubmit=async e=>{e.preventDefault();const f=new FormData(e.target);
    const reason=(f.get("r")+(f.get("d")?": "+f.get("d"):"")).slice(0,300);
    const {error}=await sb.from("duetto_reports").insert({target_type:type,target_id:id,reason,reporter:me});
    if(error&&error.code==="23505"){closeSheet();return toast(t("alreadyReported"))}
    if(error)return fail(error);closeSheet();toast(t("reportSent"))};
}
async function toggleBlock(uid){
  const {error}=myBlocks.has(uid)?await sb.from("duetto_blocks").delete().eq("blocker",me).eq("blocked",uid):await sb.from("duetto_blocks").insert({blocker:me,blocked:uid});
  if(error)return fail(error);
  const was=myBlocks.has(uid);was?myBlocks.delete(uid):myBlocks.add(uid);closeSheet();toast(was?t("unblocked"):t("blocked"));
  if(view.page==="post")await refreshDetail();else render(true);
}

/* ======================= notifications & push ======================= */
async function loadNotifs(){
  const {data,error}=await sb.from("duetto_notifications").select("*, post:duetto_posts(title)").order("created_at",{ascending:false}).limit(60);
  if(error)return fail(error);notifList=data||[];
}
function renderNotifs(){
  return `<button class="back" data-nav="mine">← ${t("back")}</button>
  <div class="row between"><div class="sect" style="margin:6px 0">🔔 ${t("notifs")}</div>${notifList.some(n=>!n.read)?`<button class="btn ghost" data-readall="1">${t("markAll")}</button>`:""}</div>
  <div id="pushBox" class="card">${pushBoxHTML()}</div>
  ${notifList.length?notifList.map(n=>`<div class="card click notif ${n.read?"":"unread"}" data-notif="${n.id}|${n.post_id||""}">
    <div>${n.kind==="anchored"?"":`<b>${esc(n.actor||"Duetto")}</b> `}${esc(T[lang].nk[n.kind]||n.kind)} <b>“${esc(n.post?.title||"")}”</b></div>
    ${n.extra?`<div class="meta" style="margin-top:4px">${esc(n.extra)}</div>`:""}<div class="meta" style="margin-top:4px">${ago(Date.parse(n.created_at))}</div></div>`).join(""):`<div class="empty">${t("noNotifs")}</div>`}`;
}
function pushState(){
  if(!("Notification" in window)||!("serviceWorker" in navigator)||!("PushManager" in window))return "unsupported";
  return Notification.permission;
}
function pushBoxHTML(){
  const s=pushState();
  if(s==="unsupported")return `<div class="meta">🔕 ${t("pushUnsupported")}</div>`;
  if(s==="denied")return `<div class="meta">🔕 ${t("pushDenied")}</div>`;
  if(s==="granted"&&load("duetto_push_ok",false))return `<div class="meta">🔔 ${t("pushEnabled")}</div>`;
  return `<p class="meta">${t("pushOnText")}</p><button class="btn sec full" style="margin-top:8px" data-push="1">🔔 ${t("pushOn")}</button>`;
}
function b64ToU8(s){const p="=".repeat((4-s.length%4)%4);const b=atob((s+p).replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(b,c=>c.charCodeAt(0))}
async function enablePush(){
  try{
    const perm=await Notification.requestPermission();
    if(perm!=="granted"){render(true);return toast(t("pushDenied"))}
    const reg=await navigator.serviceWorker.ready;
    let sub=await reg.pushManager.getSubscription();
    if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64ToU8(VAPID_PUBLIC)});
    const j=sub.toJSON();
    const {error}=await sb.from("duetto_push_subs").insert({user_id:me,endpoint:j.endpoint,p256dh:j.keys.p256dh,auth:j.keys.auth});
    if(error&&error.code!=="23505")throw error;
    save("duetto_push_ok",true);toast(t("pushEnabled"));render(true);
  }catch(e){fail(e)}
}

/* ======================= profiles ======================= */
async function loadProfile(uid){
  const [p,posts,ags,tips,chosen,priv]=await Promise.all([
    sb.from("duetto_profiles").select("*").eq("id",uid).maybeSingle(),
    sb.from("duetto_posts").select(POST_SELECT).eq("author_id",uid).order("created_at",{ascending:false}).limit(50),
    sb.from("duetto_agreements").select("id",{count:"exact",head:true}).contains("parties",[{id:uid}]),
    sb.from("duetto_payments").select("symbol,amount").eq("recipient_id",uid).eq("status","confirmed").eq("kind","tip"),
    sb.from("duetto_agreements").select("proposal:duetto_proposals!inner(author_id)",{count:"exact",head:true}).eq("proposal.author_id",uid),
    uid===me?sb.from("duetto_private_profiles").select("*").eq("id",me).maybeSingle():Promise.resolve({data:null})
  ]);
  const tp={};(tips.data||[]).forEach(x=>tp[x.symbol]=(tp[x.symbol]||0)+Number(x.amount));
  profileView={p:p.data,posts:(posts.data||[]).map(mapPost).filter(x=>visible(x.hidden,x.authorId)),agreements:ags.count||0,chosen:chosen.count||0,tips:tp,priv:priv.data};
}
function renderProfile(){
  const v=profileView;if(!v||!v.p)return `<button class="back" data-nav="explore">← ${t("back")}</button><div class="empty">—</div>`;
  const p=v.p, own=p.id===me, blocked=myBlocks.has(p.id);
  return `<button class="back" data-nav="explore">← ${t("back")}</button>
  <div class="card profile">
    <div class="row between" style="flex-wrap:nowrap;align-items:flex-start"><div class="row">${av(p.name,p.avatar_path,64)}<div><div class="ptitle" style="margin:0">${esc(p.name)}</div>
      <div class="meta">${t("memberSince")} ${fday(Date.parse(p.created_at))}${p.wallet?` · ◎ ${esc(short(p.wallet))}`:""}</div></div></div>
      ${own?"":moreBtn("user",p.id,p.id,p.name)}</div>
    ${p.bio?`<p style="margin-top:12px">${esc(p.bio)}</p>`:""}
    ${p.genres?.length?`<div class="row" style="margin-top:10px;gap:6px">${p.genres.map(g=>`<span class="badge l">${esc(g)}</span>`).join("")}</div>`:""}
    <div class="statgrid">
      <div><b>${v.posts.length}</b><span>${t("stWorks")}</span></div>
      <div><b>${v.agreements}</b><span>${t("stDone")}</span></div>
      <div><b>${v.chosen}</b><span>${t("stChosen")}</span></div>
      <div><b>${esc(tipText(v.tips)||"0")}</b><span>${t("stTips")}</span></div>
    </div>
    ${own?`<button class="btn sec full" style="margin-top:12px" data-editprofile="1">✎ ${t("editProfile")}</button>`
      :`<div class="row" style="margin-top:12px;gap:8px"><button class="btn sec" style="flex:1" data-blockuser="${p.id}|${esc(p.name)}">${blocked?"✅ "+t("unblock"):"⛔ "+t("block")}</button><button class="btn sec" style="flex:1" data-report="user|${p.id}">🚩 ${t("report")}</button></div>`}
  </div>
  <div class="sect">${t("theirPosts")}</div>
  ${v.posts.length?v.posts.map(postCard).join(""):`<div class="empty" style="padding:14px">${t("nothing")}</div>`}`;
}
function editProfileSheet(){
  const p=profileView.p, pv=profileView.priv||{};
  sheet(`<h3>✎ ${t("editProfile")}</h3>
  <form id="profForm">
    <div class="row" style="gap:12px">${av(p.name,p.avatar_path,64)}<div class="file" style="flex:1;padding:10px">📷 ${t("changePhoto")}<input type="file" accept="image/*" id="avIn"></div></div>
    <label>${t("namePh")}</label><input name="name" maxlength="24" value="${esc(p.name)}">
    <label>${t("bio")}</label><textarea name="bio" maxlength="280" placeholder="${t("bioPh")}" style="min-height:80px">${esc(p.bio||"")}</textarea>
    <label>${t("genresLbl")}</label><div class="row" style="gap:6px">${T.es.genres.map((g,i)=>`<label class="chip"><input type="checkbox" name="g" value="${esc(g)}" ${(p.genres||[]).includes(g)?"checked":""}> ${esc(T[lang].genres[i])}</label>`).join("")}</div>
    <div class="sect" style="margin-top:18px">🔒 ${t("legalTitle")}</div><p class="meta">${t("legalText")}</p>
    <label>${t("legalName")}</label><input name="legal_name" maxlength="100" value="${esc(pv.legal_name||"")}">
    <label>${t("pro")}</label><input name="pro" maxlength="40" value="${esc(pv.pro||"")}">
    <label>${t("ipi")}</label><input name="ipi" maxlength="20" value="${esc(pv.ipi||"")}">
    <button class="btn pri full" style="margin-top:16px" id="profBtn">${t("save")}</button>
  </form>`);
  let avatarBlob=null;
  document.getElementById("avIn").onchange=async e=>{const f=e.target.files[0];if(!f)return;avatarBlob=await resizeImage(f,320);toast("📷 ✓")};
  document.getElementById("profForm").onsubmit=async e=>{e.preventDefault();const f=new FormData(e.target);const btn=document.getElementById("profBtn");btn.disabled=true;
    try{
      const upd={name:f.get("name").trim()||p.name,bio:f.get("bio").trim()||null,genres:f.getAll("g").slice(0,8)};
      if(avatarBlob)upd.avatar_path=await uploadFile(avatarBlob);
      let r=await sb.from("duetto_profiles").update(upd).eq("id",me);if(r.error)throw r.error;
      r=await sb.from("duetto_private_profiles").upsert({id:me,legal_name:f.get("legal_name").trim()||null,pro:f.get("pro").trim()||null,ipi:f.get("ipi").trim()||null,updated_at:new Date().toISOString()});if(r.error)throw r.error;
      closeSheet();toast(t("saved"));await loadMe();go("profile",{userId:me});
    }catch(err){btn.disabled=false;fail(err)}};
}
function resizeImage(file,max){return new Promise((res,rej)=>{const img=new Image();img.onload=()=>{const s=Math.min(1,max/Math.max(img.width,img.height));const c=document.createElement("canvas");c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);
  c.getContext("2d").drawImage(img,0,0,c.width,c.height);c.toBlob(b=>b?res(b):rej(new Error("imagen")),"image/jpeg",.85)};img.onerror=()=>rej(new Error("imagen"));img.src=URL.createObjectURL(file)})}

/* ======================= split sheet PDF ======================= */
async function makePdf(agId){
  const a=detail.agreement, p=detail;toast(t("pdfMaking"));
  try{
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js");
    const ids=a.parties.map(x=>x.id);
    const {data:priv}=await sb.from("duetto_private_profiles").select("*").in("id",ids);
    const pv=Object.fromEntries((priv||[]).map(x=>[x.id,x]));
    const {jsPDF}=window.jspdf;const doc=new jsPDF({unit:"pt",format:"letter"});
    const W=612,M=54;let y=64;
    const line=(txt,size=11,bold=false,col=[30,30,40])=>{doc.setFont("helvetica",bold?"bold":"normal");doc.setFontSize(size);doc.setTextColor(...col);const ls=doc.splitTextToSize(String(txt),W-2*M);doc.text(ls,M,y);y+=ls.length*size*1.35};
    doc.setFillColor(15,13,23);doc.rect(0,0,W,40,"F");doc.setTextColor(255,140,150);doc.setFont("helvetica","bold");doc.setFontSize(16);doc.text("Duetto",M,26);
    doc.setTextColor(220,215,235);doc.setFontSize(9);doc.text("duettosongs.com",W-M,26,{align:"right"});
    y=78;line("Hoja de reparto / Split sheet",20,true);
    line(`Obra / Work: "${p.title}"`,13,true);
    line(`Género / Genre: ${p.genre||"-"}   ·   Fecha del acuerdo / Agreement date: ${new Date(a.createdAt).toISOString().slice(0,10)}`,10);
    y+=8;doc.setDrawColor(200,195,215);doc.line(M,y,W-M,y);y+=20;
    a.parties.forEach((x,i)=>{
      const sg=a.sigs[x.id], d=pv[x.id]||{};
      line(`${i+1}. ${x.name}`,13,true);
      line(`Aporte / Contribution: ${x.role==="l"?"Letra / Lyrics":"Música / Music"}      Porcentaje / Share: ${x.pct}%`,11);
      line(`Nombre legal / Legal name: ${d.legal_name||"__________________________"}`,10);
      line(`Sociedad / PRO: ${d.pro||"______________"}      IPI/CAE: ${d.ipi||"______________"}`,10);
      line(sg?(sg.method==="wallet"?`Firma / Signature: wallet ${sg.wallet}  ·  ${new Date(sg.at).toISOString().slice(0,16).replace("T"," ")} UTC`:`Firma / Signature: cuenta Duetto / Duetto account · ${new Date(sg.at).toISOString().slice(0,16).replace("T"," ")} UTC`):"Firma / Signature: pendiente / pending",9,false,[80,75,95]);
      if(sg?.sig)line(`Firma digital / Digital signature (ed25519): ${sg.sig}`,7,false,[110,105,125]);
      y+=6;line("Firma a mano / Signature: _______________________________     Fecha / Date: ____________",10);
      y+=8;
    });
    doc.line(M,y,W-M,y);y+=20;
    line("Total: 100%",11,true);
    line(`Huella del acuerdo / Agreement fingerprint (SHA-256):`,9,true);line(a.hash,8,false,[80,75,95]);
    line(`Huella de la obra / Work fingerprint: ${p.hash}`,8,false,[80,75,95]);
    if(a.anchorTx){y+=4;line("Registrado en Solana / Recorded on Solana:",9,true);line(`https://solscan.io/tx/${a.anchorTx}`,8,false,[40,90,200]);}
    y+=12;
    line("Este documento resume el acuerdo de coautoría firmado en Duetto. Sirve como evidencia entre las partes y para registrar la obra en tu sociedad de autores; no sustituye ese registro ni la asesoría legal.",8,false,[110,105,125]);
    line("This document summarizes the co-writing agreement signed on Duetto. It serves as evidence between the parties and to register the work with your PRO; it does not replace that registration or legal advice.",8,false,[110,105,125]);
    const name=`Duetto-split-sheet-${p.title.replace(/[^\w\-]+/g,"_").slice(0,40)}.pdf`;
    doc.save(name);
  }catch(e){fail(e)}
}

/* ======================= chat between co-authors ======================= */
let chatChannel=null, chatPoll=null;
async function chatSheet(agId){
  const a=detail.agreement;
  const other=a.parties.find(x=>x.id!==me);
  sheet(`<h3>💬 ${t("chat")}</h3><p>“${esc(detail.title)}” · ${esc(other?.name||"")}</p>
  <div class="chatbox" id="chatBox"><div class="meta">${t("loading")}</div></div>
  <form id="chatForm" class="row" style="flex-wrap:nowrap;margin-top:10px"><input name="m" maxlength="1000" placeholder="${t("chatPh")}" autocomplete="off"><button class="btn pri" style="padding:10px 14px">${t("send")}</button></form>`);
  const draw=async()=>{
    const {data}=await sb.from("duetto_messages").select("*").eq("agreement_id",agId).order("created_at").limit(300);
    const box=document.getElementById("chatBox");if(!box)return;
    const names=Object.fromEntries(a.parties.map(x=>[x.id,x.name]));
    box.innerHTML=(data||[]).length?(data||[]).map(m=>`<div class="msg ${m.user_id===me?"mine":""}"><div>${esc(m.body)}</div><span>${esc(m.user_id===me?"":names[m.user_id]||"")} ${ago(Date.parse(m.created_at))}</span></div>`).join(""):`<div class="meta" style="text-align:center;padding:20px">${t("noMsgs")}</div>`;
    box.scrollTop=box.scrollHeight;
  };
  await draw();
  try{chatChannel=sb.channel("chat-"+agId).on("postgres_changes",{event:"INSERT",schema:"public",table:"duetto_messages",filter:`agreement_id=eq.${agId}`},draw).subscribe()}catch(e){}
  chatPoll=setInterval(draw,8000);
  onSheetClose=()=>{clearInterval(chatPoll);if(chatChannel)sb.removeChannel(chatChannel);chatChannel=null};
  document.getElementById("chatForm").onsubmit=async e=>{e.preventDefault();const inp=e.target.m;const body=inp.value.trim();if(!body)return;inp.value="";
    const {error}=await sb.from("duetto_messages").insert({agreement_id:agId,user_id:me,body});if(error)return fail(error);pushFlush();draw()};
}

/* ======================= challenges ======================= */
function renderChallenge(){
  const c=activeChallenge()||challenges[0];
  if(!c)return `<button class="back" data-nav="explore">← ${t("back")}</button><div class="empty">${t("noChallenge")}</div>`;
  const posts=feed.filter(p=>p.challengeId===c.id&&visible(p.hidden,p.authorId));
  const ended=Date.parse(c.ends_at)<Date.now();
  return `<button class="back" data-nav="explore">← ${t("back")}</button>
  <div class="challenge"><small>${t("challengeOf")}${c.prize?" · 🏆 "+esc(c.prize):""}</small><h3>${esc(chTitle(c))}</h3><p>${esc(chBody(c))}</p>
    <p class="meta" style="color:#f2d9e3;margin-top:6px">#${esc(c.tag)} · ${ended?t("challengeEnded"):t("challengeEnds")} ${fday(Date.parse(c.ends_at))}</p></div>
  ${c.winner_proposal_id?`<div class="card agree"><b>🏆 ${t("winner")}</b><div class="meta" id="winnerBox" data-winnerid="${c.winner_proposal_id}">…</div></div>`:""}
  ${ended?"":`<button class="btn pri full" data-nav="new" data-joinch="1" style="margin-bottom:12px">＋ ${t("joinChallenge")}</button>`}
  <div class="sect">${t("challengePosts")} (${posts.length})</div>
  ${posts.length?posts.sort((a,b)=>b.voteCount-a.voteCount).map(postCard).join(""):`<div class="empty" style="padding:14px">${t("nothing")}</div>`}`;
}
async function fillWinner(){
  const el=document.getElementById("winnerBox");if(!el)return;
  const {data}=await sb.from("duetto_proposals").select("id,post_id,author:duetto_profiles(name),post:duetto_posts(title)").eq("id",el.dataset.winnerid).maybeSingle();
  if(data)el.innerHTML=`<span class="click" data-open="${data.post_id}">${esc(data.author?.name||"")} · “${esc(data.post?.title||"")}” →</span>`;
  else el.textContent="—";
}

/* ======================= admin ======================= */
async function loadAdmin(){
  if(!isAdmin){adminData=null;return}
  const [r]=await Promise.all([sb.from("duetto_reports").select("*, reporter_p:duetto_profiles!duetto_reports_reporter_fkey(name)").eq("resolved",false).order("created_at",{ascending:false}).limit(200)]);
  const groups={};(r.data||[]).forEach(x=>{const k=x.target_type+"|"+x.target_id;(groups[k]=groups[k]||{type:x.target_type,id:x.target_id,items:[]}).items.push(x)});
  // find the post for each target so the admin can open it
  const g=Object.values(groups);
  for(const x of g){
    if(x.type==="post")x.post=x.id;
    else if(x.type==="proposal"){const {data}=await sb.from("duetto_proposals").select("post_id").eq("id",x.id).maybeSingle();x.post=data?.post_id}
    else if(x.type==="review"||x.type==="mark"){const {data}=await sb.from(x.type==="review"?"duetto_reviews":"duetto_marks").select("post_id").eq("id",x.id).maybeSingle();x.post=data?.post_id}
    else if(x.type==="comment"){const {data}=await sb.from("duetto_comments").select("proposal:duetto_proposals(post_id)").eq("id",x.id).maybeSingle();x.post=data?.proposal?.post_id}
  }
  adminData={groups:g};
}
function renderAdmin(){
  if(!isAdmin)return `<div class="empty">—</div>`;
  const b=config.boost||{symbol:"USDC",amount:1,hours:24};
  const g=adminData?.groups||[];
  const inWeek=new Date(Date.now()+7*86400e3).toISOString().slice(0,10);
  return `<button class="back" data-nav="mine">← ${t("back")}</button><div class="ptitle">🛠 ${t("admin")}</div>
  <div class="sect">🚩 ${t("reports")} (${g.length})</div>
  ${g.length?g.map(x=>`<div class="card"><div class="row between"><b>${esc(x.type)}</b><span class="badge o">${x.items.length}</span></div>
    ${x.items.slice(0,4).map(r=>`<div class="meta" style="margin-top:4px">• ${esc(r.reason)} — ${esc(r.reporter_p?.name||"")}</div>`).join("")}
    <div class="row" style="margin-top:10px;gap:6px">${x.post?`<button class="btn sec" data-open="${x.post}">${t("open")}</button>`:""}${x.type!=="user"?`<button class="btn sec" data-adminhide="${x.type}|${x.id}|1">${t("hide")}</button><button class="btn sec" data-adminhide="${x.type}|${x.id}|0">${t("restoreBtn")}</button>`:`<button class="btn sec" data-user="${x.id}">${t("profile")}</button>`}<button class="btn ghost" data-resolve="${x.type}|${x.id}">${t("resolve")}</button></div></div>`).join(""):`<div class="empty" style="padding:14px">${t("noReports")}</div>`}
  <div class="sect">🏆 ${t("challenges")}</div>
  ${challenges.map(c=>`<div class="card"><b>#${esc(c.tag)} · ${esc(c.title_es)}</b><div class="meta">${fday(Date.parse(c.starts_at))} → ${fday(Date.parse(c.ends_at))}${c.prize?" · "+esc(c.prize):""}${c.winner_proposal_id?" · 🏆 ✓":""}</div></div>`).join("")}
  <form id="chForm" class="card"><b>＋ ${t("newChallenge")}</b>
    <label>${t("chTitleEs")}</label><input name="title_es" maxlength="80" required>
    <label>${t("chTitleEn")}</label><input name="title_en" maxlength="80">
    <label>${t("chBodyEs")}</label><input name="body_es" maxlength="300">
    <label>${t("chBodyEn")}</label><input name="body_en" maxlength="300">
    <div class="row" style="gap:10px;flex-wrap:nowrap"><div style="flex:1"><label>${t("chTagL")}</label><input name="tag" maxlength="20" pattern="[a-z0-9]{2,20}" required></div>
    <div style="flex:1"><label>${t("chPrize")}</label><input name="prize" maxlength="40"></div></div>
    <label>${t("chEnds")}</label><input name="ends" type="date" value="${inWeek}" required>
    <button class="btn pri full" style="margin-top:14px">${t("create")}</button></form>
  <div class="sect">⚙️ ${t("config")}</div>
  <form id="cfgForm" class="card">
    <label>${t("boostPrice")}</label><div class="row" style="gap:10px;flex-wrap:nowrap"><input name="amount" type="number" min="0.1" step="0.1" value="${esc(b.amount)}"><select name="symbol"><option ${b.symbol==="USDC"?"selected":""}>USDC</option><option ${b.symbol==="SKR"?"selected":""}>SKR</option></select></div>
    <label>${t("boostHours")}</label><input name="hours" type="number" min="1" max="720" value="${esc(b.hours)}">
    <label>${t("treasury")}</label><input name="treasury" value="${esc(config.treasury_wallet||"")}" maxlength="44">
    <button class="btn sec full" style="margin-top:14px">${t("save")}</button></form>`;
}

/* ======================= payments: tips + boosts (Solana Pay) ======================= */
function tipSheet(kind,id,name){
  sheet(`<h3>💸 ${t("tipTitle")}</h3><p>${t("tipText").replace("{n}",esc(name))}</p>
  <div class="row" style="gap:8px;margin-top:8px">${[["USDC",1],["USDC",3],["USDC",5],["SKR",100],["SKR",500],["SKR",1000]].map(([s,a])=>`<button class="btn sec" data-tipamt="${kind}|${id}|${s}|${a}">${a} ${s}</button>`).join("")}</div>`);
}
function boostSheet(postId){
  const b=config.boost||{symbol:"USDC",amount:1,hours:24};
  sheet(`<h3>⭐ ${t("boostTitle")}</h3><p>${t("boostText").replace("{h}",esc(b.hours))}</p>
  <button class="btn pri full" style="margin-top:10px" data-boostpay="${postId}">⭐ ${esc(b.amount)} ${esc(b.symbol)} · ${esc(b.hours)} h</button>`);
}
async function startPayment(body){
  let pay;
  try{pay=await callWalletFn({action:"pay_create",...body})}catch(e){return fail(e)}
  const label=encodeURIComponent("Duetto"), msg=encodeURIComponent(body.kind==="boost"?"Destacar en Duetto":"Propina en Duetto");
  const url=`solana:${pay.recipient}?amount=${pay.amount}&spl-token=${pay.mint}&reference=${pay.reference}&label=${label}&message=${msg}`;
  sheet(`<h3>${body.kind==="boost"?"⭐":"💸"} ${esc(pay.amount)} ${esc(pay.symbol)}</h3>
    <a class="btn pri full" href="${esc(url)}">◎ ${t("payOpen")}</a>
    <p class="meta" style="margin-top:14px">${t("payScan")}</p><div id="qr" class="qr"></div>
    <div class="hash">→ ${esc(pay.recipient)}</div>
    <button class="btn sec full" style="margin-top:14px" id="payChk">✓ ${t("payDone")}</button><div class="meta" id="payMsg" style="margin-top:8px"></div>`);
  try{await loadScript("https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js");new QRCode(document.getElementById("qr"),{text:url,width:220,height:220,colorDark:"#0f0d17",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.L})}catch(e){}
  let polling=null;
  const check=async(manual)=>{const m=document.getElementById("payMsg");if(!m)return clearInterval(polling);if(manual)m.textContent=t("payChecking");
    try{const r=await callWalletFn({action:"pay_check",payment_id:pay.id});
      if(r.status==="confirmed"){clearInterval(polling);closeSheet();toast(t("payOk"));pushFlush();if(view.page==="post")refreshDetail();else go(view.page,{});}
      else if(manual)m.textContent=t("payPending");}catch(e){if(manual)fail(e)}};
  document.getElementById("payChk").onclick=()=>check(true);
  polling=setInterval(()=>check(false),6000);onSheetClose=()=>clearInterval(polling);
}

/* ======================= studio: grabar tu voz sobre la música ======================= */
const S={ctx:null,back:null,voc:null,vocBlob:null,offset:0,gM:.8,gV:1,rec:null,nodes:[],t0:0,endAt:0,raf:0,mode:"idle"};
function actx(){if(!S.ctx)S.ctx=new (window.AudioContext||window.webkitAudioContext)();return S.ctx}
async function decodeBlob(b){const ab=await b.arrayBuffer();return await actx().decodeAudioData(ab)}
function encodeWav(ch,sr){const n=ch.length,buf=new ArrayBuffer(44+n*2),v=new DataView(buf);const w=(o,x)=>[...x].forEach((c,i)=>v.setUint8(o+i,c.charCodeAt(0)));
  w(0,"RIFF");v.setUint32(4,36+n*2,true);w(8,"WAVE");w(12,"fmt ");v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,sr,true);v.setUint32(28,sr*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);w(36,"data");v.setUint32(40,n*2,true);
  for(let i=0;i<n;i++)v.setInt16(44+i*2,Math.max(-1,Math.min(1,ch[i]))*32767,true);return new Blob([buf],{type:"audio/wav"})}
function sNode(buf,when,skip,gain){const c=actx(),src=c.createBufferSource(),g=c.createGain();src.buffer=buf;g.gain.value=gain;src.connect(g).connect(c.destination);src.start(when,skip||0);src._g=g;S.nodes.push(src);return src}
function stopAll(){S.nodes.forEach(n=>{try{n.stop()}catch(e){}});S.nodes=[];S.sB=S.sV=null;cancelAnimationFrame(S.raf);if(S.rec&&S.rec.state!=="inactive")S.rec.stop();S.mode="idle";updStudio()}
const fmt=x=>{x=Math.max(0,x|0);return Math.floor(x/60)+":"+String(x%60).padStart(2,"0")};
function tick(){const el=document.getElementById("stTime");if(!el)return;const now=actx().currentTime-S.t0;const tot=S.endAt-S.t0;
  el.textContent=fmt(now)+(tot>0?" / "+fmt(tot):"");const pr=document.getElementById("stProg");if(pr)pr.style.width=(tot>0?Math.min(100,now/tot*100):0)+"%";
  if(S.mode==="play"&&actx().currentTime>S.endAt)return stopAll();S.raf=requestAnimationFrame(tick)}
async function startRec(){
  stopAll();let stream;
  try{if(!navigator.mediaDevices?.getUserMedia)throw 0;stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false}})}
  catch(e){document.getElementById("stNoMic").hidden=false;return}
  const c=actx();await c.resume();const chunks=[];const rec=new MediaRecorder(stream);
  rec.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};
  rec.onstop=async()=>{stream.getTracks().forEach(x=>x.stop());const blob=new Blob(chunks,{type:rec.mimeType||"audio/webm"});
    try{S.vocBlob=blob;S.voc=await decodeBlob(blob);S.offset=-Math.round(60+((c.outputLatency||0)+(c.baseLatency||0))*1000);document.getElementById("stOff").value=S.offset;updStudio();updOff();toast(t("stDone"))}catch(err){toast("Error: "+err)}};
  S.rec=rec;rec.start();S.mode="rec";S.t0=c.currentTime+.06;S.endAt=S.back?S.t0+S.back.duration:0;
  if(S.back){const src=sNode(S.back,S.t0,0,S.gM);src.onended=()=>{if(S.mode==="rec")stopAll()}}
  tick();updStudio();
}
async function preview(){
  stopAll();if(!S.voc&&!S.back)return;const c=actx();await c.resume();const t0=c.currentTime+.08,off=S.offset/1000;let end=0;
  if(S.back){S.sB=sNode(S.back,t0,0,S.gM);end=S.back.duration}
  if(S.voc){S.sV=off>=0?sNode(S.voc,t0+off,0,S.gV):sNode(S.voc,t0,Math.min(-off,S.voc.duration),S.gV);end=Math.max(end,S.voc.duration+off)}
  S.t0=t0;S.endAt=t0+end;S.mode="play";tick();updStudio();
}
async function renderMix(){
  if(!S.back)return S.vocBlob;const sr=22050,off=S.offset/1000,dur=Math.max(S.back.duration,S.voc.duration+off);
  const oc=new OfflineAudioContext(1,Math.ceil(dur*sr),sr);
  const add=(b,w,sk,g)=>{const x=oc.createBufferSource(),gn=oc.createGain();x.buffer=b;gn.gain.value=g;x.connect(gn).connect(oc.destination);x.start(w,sk)};
  add(S.back,0,0,S.gM);off>=0?add(S.voc,off,0,S.gV):add(S.voc,0,Math.min(-off,S.voc.duration),S.gV);
  const out=await oc.startRendering();return encodeWav(out.getChannelData(0),sr);
}
function updStudio(){
  const r=document.getElementById("stRec");if(!r)return;
  r.textContent=S.mode==="rec"?"■ "+t("stStopRec"):(S.voc?"↺ "+t("stAgain"):"● "+(S.back?t("stRecOver"):t("stRecMel")));
  r.classList.toggle("live",S.mode==="rec");
  const pl=document.getElementById("stPlay");pl.disabled=!S.voc||S.mode==="rec";pl.textContent=S.mode==="play"?"■ "+t("stStop"):"▶ "+(S.back?t("stListenMix"):t("stListen"));
  document.getElementById("stMix").hidden=!S.voc;
  document.getElementById("stState").textContent=S.mode==="rec"?"🔴 "+t("stRecording"):S.voc?"✓ "+t("stReady"):"";
}
function studioHTML(lyr,hasBack){return `<div class="studio">
  <div class="row between"><b>🎙 ${t("stTitle")}</b><span class="meta" id="stState"></span></div>
  <div class="hint" style="margin-top:2px">${hasBack?t("stSubBack"):t("stSubMel")}</div>
  ${lyr!==null?`<div class="kara" id="kara">${esc(lyr)||`<span class="meta">${t("stWriteFirst")}</span>`}</div>`:""}
  <div class="prog"><div id="stProg"></div></div><div class="meta" id="stTime" style="text-align:right">0:00</div>
  <div class="row" style="flex-wrap:nowrap;margin-top:6px"><button type="button" class="btn rec" id="stRec" style="flex:1"></button><button type="button" class="btn sec" id="stPlay" style="flex:1" disabled></button></div>
  <div id="stNoMic" class="nomic" hidden>🎤 ${t("stNoMic")}</div>
  <div class="file" style="margin-top:10px;padding:10px" id="stUpBox">⬆ ${t("stUpload")}<input type="file" accept="audio/*" id="stUp"></div>
  <div id="stMix" hidden>
    <label>${t("stVolM")}</label><input type="range" min="0" max="1.2" step=".05" value="${S.gM}" id="stVM" ${hasBack?"":"disabled"}>
    <label>${t("stVolV")}</label><input type="range" min="0" max="2" step=".05" value="${S.gV}" id="stVV">
    ${hasBack?`<label>${t("stSync")} <span id="stOffV"></span></label><input type="range" min="-800" max="800" step="10" value="${S.offset}" id="stOff"><div class="hint">${t("stSyncHint")}</div>`:`<input type="hidden" id="stOff" value="0">`}
  </div>
  <div class="hint" style="margin-top:10px">🎧 ${t("stPhones")}</div>
</div>`}
function wireStudio(){
  document.getElementById("stRec").onclick=()=>S.mode==="rec"?stopAll():startRec();
  document.getElementById("stPlay").onclick=()=>S.mode==="play"?stopAll():preview();
  document.getElementById("stUp").onchange=async e=>{const f=e.target.files[0];if(!f)return;stopAll();
    try{S.vocBlob=f;S.voc=await decodeBlob(f);S.offset=0;document.getElementById("stOff").value=0;document.getElementById("stUpBox").firstChild.textContent="🎵 "+f.name;updStudio();updOff()}catch(err){toast(t("stBadFile"))}};
  const vm=document.getElementById("stVM"),vv=document.getElementById("stVV"),of=document.getElementById("stOff");
  vm.oninput=()=>{S.gM=+vm.value;if(S.sB)S.sB._g.gain.value=S.gM};
  vv.oninput=()=>{S.gV=+vv.value;if(S.sV)S.sV._g.gain.value=S.gV};
  of.oninput=()=>{S.offset=+of.value;updOff()};of.onchange=()=>{if(S.mode==="play")preview()};
  updStudio();updOff();
}
function updOff(){const e=document.getElementById("stOffV");if(e)e.textContent=(S.offset>0?"+":"")+S.offset+" ms"}


function proposeSheet(id){
  const p=detail,isL=p.type==="lyrics";
  Object.assign(S,{back:null,voc:null,vocBlob:null,offset:0,gM:.8,gV:1,mode:"idle"});
  sheet(`<h3>${isL?t("propTitleL"):t("propTitleM")}</h3><p>“${esc(p.title)}” · ${esc(p.author)}</p>
  <form id="propForm">
    ${isL?"":`<label>${t("lyrics")}</label><textarea name="text" id="propText" placeholder="${t("lyricsPh")}" maxlength="6000" style="min-height:150px"></textarea>`}
    <div id="studioWrap">${studioHTML(isL?(p.text||""):"",!isL)}</div>
    <label>${t("note")}</label><input name="note" placeholder="${t("notePh")}" maxlength="200">
    <div style="margin-top:14px">${splitBar(p)}</div>
    <label class="row" style="color:var(--text);font-size:14px;margin-top:12px;flex-wrap:nowrap"><input type="checkbox" name="ok" style="width:auto"> ${t("agreeSplit")}</label>
    <button class="btn pri full" style="margin-top:14px" id="propBtn">${t("sendProp")}</button>
  </form>`);
  wireStudio();
  if(!isL&&p.audioPath){(async()=>{try{const r=await fetch(await signedUrl(p.audioPath));S.back=await decodeBlob(await r.blob());
      const tm=document.getElementById("stTime");if(tm)tm.textContent="0:00 / "+fmt(S.back.duration);updStudio()}catch(e){fail(e)}})();
    const ta=document.getElementById("propText");ta.oninput=()=>{document.getElementById("kara").textContent=ta.value||""}}
  document.getElementById("propForm").onsubmit=async e=>{
    e.preventDefault();const f=new FormData(e.target);
    const text=(f.get("text")||"").trim();
    if(!isL&&!text)return toast(t("lyricsPh"));
    if(isL&&!S.voc)return toast(t("stNeedRec"));
    if(!f.get("ok"))return toast(t("agreeSplit")+" ✓");
    if(!isL&&S.voc&&!S.back)return toast(t("loading"));
    const btn=document.getElementById("propBtn");btn.disabled=true;btn.textContent=t("uploading");
    try{
      stopAll();let audio_path=null,mixed=false,hashSrc=text;
      if(S.voc){const blob=await renderMix();mixed=!!S.back;hashSrc=blob;audio_path=await uploadAudio(blob)}
      const hash=await sha(hashSrc);
      const {error}=await sb.from("duetto_proposals").insert({post_id:p.id,author_id:me,text:text||null,audio_path,mixed,note:(f.get("note")||"").trim()||null,hash});
      if(error)throw error;
      myPropPosts.add(p.id);closeSheet();toast(t("sent"));pushFlush();await refreshDetail();
    }catch(err){btn.disabled=false;btn.textContent=t("sendProp");fail(err)}
  };
}


/* ======================= finished songs: feedback ======================= */
const CATS=["lyrics","melody","voice","production","hook","commercial"];
const mmss=s=>{s=Math.max(0,Math.floor(s||0));return Math.floor(s/60)+":"+String(s%60).padStart(2,"0")};
const starTxt=v=>v?"★".repeat(v)+"☆".repeat(5-v):"";
let reviewDraft={};

function songCard(p){
  return `<div class="card click ${isBoosted(p)?"boost":""}" data-open="${p.id}">
    <div class="row between"><span class="badge s">🎧 ${t("hasSong")}</span>
    <span class="row" style="gap:6px">${isBoosted(p)?`<span class="badge o">⭐ ${t("boosted")}</span>`:""}</span></div>
    <div class="ptitle">${esc(p.title)}</div>
    <div class="meta">${t("by")} ${esc(p.author)} · ${esc(p.genre)} · ${esc(T[lang].langNames[p.lang]||"")} · ${ago(p.createdAt)}</div>
    ${p.hidden?`<div class="hiddenmsg">🚩 ${t("hiddenMsg")}</div>`:""}
    ${p.mood?`<div style="font-size:13.5px;margin-top:6px;color:#d8d2e8">${esc(p.mood)}</div>`:""}
    <div class="minwave">${Array.from({length:42},(_,i)=>`<i style="height:${20+Math.round(70*Math.abs(Math.sin(i*1.7+p.title.length)))}%"></i>`).join("")}</div>
    <div class="stats"><span>⭐ ${p.ratingAvg!=null?p.ratingAvg.toFixed(1):"–"}</span><span>📝 ${p.reviewCount} ${p.reviewCount===1?t("reviewsN1"):t("reviewsN")}</span></div>
  </div>`;
}

function renderNewSong(){
  return `<div class="sect" style="margin-top:4px">${t("newPost")}</div>
  <div class="typepick">
    <button class="tp l" data-type="lyrics"><b>✎ ${t("iHaveL")}</b><span>${t("iHaveLs")}</span></button>
    <button class="tp m" data-type="music"><b>♪ ${t("iHaveM")}</b><span>${t("iHaveMs")}</span></button>
    <button class="tp s wide on" data-type="song"><b>🎧 ${t("iHaveS")}</b><span>${t("iHaveSs")}</span></button>
  </div>
  <form id="newForm">
    <label>${t("title")}</label><input name="title" maxlength="80" value="${esc(draft.title||"")}">
    <div class="row" style="gap:10px;flex-wrap:nowrap"><div style="flex:1"><label>${t("genre")}</label><select name="genre">${T[lang].genres.map((g,i)=>`<option value="${i}" ${+draft.genre===i?"selected":""}>${g}</option>`).join("")}</select></div>
    <div style="flex:1"><label>${t("songLang")}</label><select name="lang">${Object.entries(T[lang].langNames).map(([k,v])=>`<option value="${k}" ${draft.lang===k?"selected":""}>${esc(v)}</option>`).join("")}</select></div></div>
    <label>${t("mood")}</label><input name="mood" placeholder="${t("moodPh")}" maxlength="140" value="${esc(draft.mood||"")}">
    <label>${t("songAudio")}</label><div class="file" id="fileBox">${draft.fileName?"🎵 "+esc(draft.fileName):"⬆ "+t("audioPick")}<input type="file" accept="audio/*" id="fileIn"></div>
    <label>${t("songLyricsOpt")}</label><textarea name="text" placeholder="${t("lyricsPh")}" maxlength="6000" style="min-height:120px">${esc(draft.text||"")}</textarea>
    <button class="btn pri full" style="margin-top:20px" id="postBtn">${t("post")}</button>
  </form>`;
}

async function loadSongExtras(p){
  const owner=p.authorId===me;
  const [rv,mk,ls]=await Promise.all([
    canSee(p)?sb.from("duetto_reviews").select("*, user:duetto_profiles(name,avatar_path)").eq("post_id",p.id).order("created_at",{ascending:false}):Promise.resolve({data:[]}),
    canSee(p)?sb.from("duetto_marks").select("*, user:duetto_profiles(name)").eq("post_id",p.id).order("at_sec"):Promise.resolve({data:[]}),
    owner?sb.from("duetto_listens").select("max_sec,duration").eq("post_id",p.id):Promise.resolve({data:[]})
  ]);
  p.reviews=(rv.data||[]).filter(r=>visible(r.hidden,r.user_id));
  p.marks=(mk.data||[]).filter(m=>visible(m.hidden,m.user_id));
  p.listens=ls.data||[];
  const mine=p.reviews.find(r=>r.user_id===me);
  reviewDraft=mine?Object.fromEntries(CATS.map(c=>[c,mine[c]||0])):{};
}

function catBars(reviews){
  return CATS.map(c=>{const v=reviews.map(r=>r[c]).filter(Boolean);const a=v.length?v.reduce((x,y)=>x+y,0)/v.length:0;
    return `<div class="catbar"><span>${esc(T[lang].cats[c])}</span><div><i style="width:${a/5*100}%"></i></div><b>${a?a.toFixed(1):"–"}</b></div>`}).join("");
}
function retentionChart(listens){
  if(!listens.length)return `<p class="meta">${t("noListens")}</p>`;
  const D=Math.max(...listens.map(l=>Number(l.duration)));const N=24;
  const pts=[...Array(N+1)].map((_,i)=>{const tt=i/N*D;const pct=listens.filter(l=>Number(l.max_sec)>=tt-0.5).length/listens.length*100;return {tt,pct}});
  let drop=0,dropAt=0;for(let i=1;i<pts.length;i++){const d=pts[i-1].pct-pts[i].pct;if(d>drop){drop=d;dropAt=pts[i].tt}}
  const W=320,H=120,x=i=>i/N*W,y=v=>H-v/100*H;
  const line=pts.map((p,i)=>`${x(i).toFixed(1)},${y(p.pct).toFixed(1)}`).join(" ");
  return `<svg viewBox="0 0 ${W} ${H+18}" class="retchart" role="img" aria-label="${t("retention")}">
    <defs><linearGradient id="rg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ff6b8b" stop-opacity=".45"/><stop offset="1" stop-color="#ff6b8b" stop-opacity="0"/></linearGradient></defs>
    <line x1="0" y1="${y(50)}" x2="${W}" y2="${y(50)}" class="grid"/>
    <polygon points="0,${H} ${line} ${W},${H}" fill="url(#rg)"/><polyline points="${line}" fill="none" stroke="#ff6b8b" stroke-width="2.5" stroke-linejoin="round"/>
    ${drop>0?`<circle cx="${(dropAt/D*W).toFixed(1)}" cy="${y(pts[Math.round(dropAt/D*N)].pct).toFixed(1)}" r="5" fill="#ffcf5c"/>`:""}
    <text x="0" y="${H+14}">0:00</text><text x="${W}" y="${H+14}" text-anchor="end">${mmss(D)}</text><text x="${W}" y="${y(50)-4}" text-anchor="end">50%</text>
  </svg>
  <div class="meta">${listens.length} ${t("listeners")}${drop>=10?` · ${t("biggestDrop")} <b>${mmss(dropAt)}</b> (−${Math.round(drop)}%)`:""}</div>`;
}

function renderSong(p){
  const owner=p.authorId===me, unlocked=canSee(p);
  const mine=(p.reviews||[]).find(r=>r.user_id===me);
  let html=`<button class="back" data-nav="explore">← ${t("back")}</button>
  <div class="card ${isBoosted(p)?"boost":""}">
    <div class="row between"><span class="badge s">🎧 ${t("hasSong")}</span>${owner?"":moreBtn("post",p.id,p.authorId,p.author)}</div>
    <div class="ptitle" style="font-size:26px">${esc(p.title)}</div>
    <div class="row meta click" style="margin-top:4px" data-user="${p.authorId}">${av(p.author,p.authorAvatar)} <u>${esc(p.author)}</u> · ${esc(p.genre)} · ${esc(T[lang].langNames[p.lang]||"")} · ${ago(p.createdAt)}</div>
    ${p.hidden?`<div class="hiddenmsg">🚩 ${t("hiddenMsg")}</div>`:""}
    ${p.mood?`<p style="margin-top:10px;font-size:14px">${esc(p.mood)}</p>`:""}
    ${unlocked&&p.audioPath?`<div class="player" id="player" data-path="${esc(p.audioPath)}">
        <div class="wave" id="wave"><div class="wbars" id="wbars">${Array.from({length:80},()=>`<i style="height:12%"></i>`).join("")}</div><div class="wprog" id="wprog"></div>
          <div class="wmarks">${(p.marks||[]).map(m=>`<button class="wdot" data-seek="${m.at_sec}" title="${esc(mmss(m.at_sec)+" · "+m.body)}"></button>`).join("")}</div></div>
        <div class="row between" style="margin-top:8px;flex-wrap:nowrap"><button class="btn sec" id="playBtn">▶</button><span class="meta" id="ptime">0:00</span>
          ${owner?"":`<button class="btn sec" style="white-space:nowrap;font-size:13px" data-markhere="1">📍 ${t("markHere")} <span id="markT">0:00</span></button>`}</div>
        <audio id="songAudio" preload="metadata"></audio>
      </div>`
      :`<div class="lyrics locked" style="font-family:Inter;font-size:14px;color:var(--muted)">🎧 ••• ••• ••• •••</div>`}
    ${p.text?`<details style="margin-top:10px"><summary class="meta click">${t("lyrics")}</summary><div class="lyrics">${esc(p.text)}</div></details>`:""}
    <div class="hash">${t("fp")}: ${esc(p.hash.slice(0,32))}… · ${fdate(p.createdAt)}</div>
    <div style="margin-top:12px">
    ${owner?`<div class="row between"><span class="meta">${t("ownSongHint")}</span><button class="btn sec" data-boost="${p.id}">⭐ ${t("boostBtn")}</button></div>`
      :!unlocked?`<button class="btn pri full" data-unlock="${p.id}">🎧 ${t("listenCritique")}</button>`
      :`<button class="btn sec" data-tip="post|${p.id}|${esc(p.author)}">💸 ${t("tipBtn")}</button>`}
    </div>
  </div>`;
  if(owner){
    html+=`<div class="card"><b>📊 ${t("summary")}</b>
      <div class="row between" style="margin-top:8px"><span class="meta">${t("overall")}</span><b style="font-size:20px">⭐ ${p.ratingAvg!=null?p.ratingAvg.toFixed(2):"–"} <span class="meta">· ${p.reviewCount} ${p.reviewCount===1?t("reviewsN1"):t("reviewsN")}</span></b></div>
      <div style="margin-top:8px">${catBars(p.reviews||[])}</div>
      <div class="sect" style="margin:16px 0 4px">📉 ${t("retention")}</div><p class="meta" style="margin-bottom:6px">${t("retentionHint")}</p>
      ${retentionChart(p.listens||[])}</div>`;
  }
  if(!unlocked)return html;
  html+=`<div class="sect">📍 ${t("marks")} (${(p.marks||[]).length})</div>
  ${(p.marks||[]).length?(p.marks||[]).map(m=>`<div class="markrow"><button class="mtime" data-seek="${m.at_sec}">${mmss(m.at_sec)}</button><div style="flex:1"><b class="click" data-user="${m.user_id}">${esc(m.user?.name||"")}</b> ${m.hidden?`<span class="meta">🚩</span>`:""}${esc(m.body)}</div>${m.user_id===me?"":moreBtn("mark",m.id,m.user_id,m.user?.name||"")}</div>`).join("")
    :`<div class="meta" style="padding:4px 2px 8px">${t("noMarks")}</div>`}`;
  if(!owner){
    html+=`<form id="revForm" class="card"><b>📝 ${mine?t("yourReview"):t("sendReview")}</b>
      <div class="rate" style="margin-top:10px">${CATS.map(c=>`<span>${esc(T[lang].cats[c])}</span><div class="stars">${[1,2,3,4,5].map(i=>`<button type="button" class="star ${i<=(reviewDraft[c]||0)?"on":""}" data-rv="${c}|${i}">★</button>`).join("")}</div>`).join("")}</div>
      <label>${t("change")} *</label><textarea name="change" maxlength="600" required placeholder="${t("changePh")}" style="min-height:80px">${esc(mine?.change||"")}</textarea>
      <label>${t("best")}</label><input name="best" maxlength="600" value="${esc(mine?.best||"")}">
      <button class="btn pri full" style="margin-top:12px">${mine?t("updateReview"):t("sendReview")}</button></form>`;
  }
  html+=`<div class="sect">📝 ${t("reviews")} (${(p.reviews||[]).length})</div>
  ${(p.reviews||[]).length?(p.reviews||[]).map(r=>`<div class="prop">
    <div class="row between"><div class="row click" data-user="${r.user_id}">${av(r.user?.name,r.user?.avatar_path)}<b>${esc(r.user?.name||"")}</b><span class="meta">· ${ago(Date.parse(r.created_at))}</span></div>${r.user_id===me?"":moreBtn("review",r.id,r.user_id,r.user?.name||"")}</div>
    ${r.hidden?`<div class="hiddenmsg">🚩 ${t("hiddenMsg")}</div>`:""}
    <div class="rvchips">${CATS.filter(c=>r[c]).map(c=>`<span>${esc(T[lang].cats[c])} <b>${starTxt(r[c])}</b></span>`).join("")}</div>
    <p style="margin-top:8px;font-size:14px"><b>${t("changeLbl")}:</b> ${esc(r.change)}</p>
    ${r.best?`<p style="margin-top:4px;font-size:14px"><b>${t("bestLbl")}:</b> ${esc(r.best)}</p>`:""}
  </div>`).join(""):`<div class="empty" style="padding:14px">${t("noReviews")}</div>`}`;
  return html;
}

/* ----- player: waveform, marks, listening record ----- */
const peaksCache=new Map();
let listenState=null;
async function setupSongPlayer(){
  const box=document.getElementById("player");if(!box||box.dataset.ready)return;box.dataset.ready="1";
  const p=detail, audio=document.getElementById("songAudio"), path=box.dataset.path;
  let url;try{url=await signedUrl(path)}catch(e){return}
  audio.src=url;
  const playBtn=document.getElementById("playBtn"), prog=document.getElementById("wprog"), ptime=document.getElementById("ptime"), markT=document.getElementById("markT");
  playBtn.onclick=()=>audio.paused?audio.play().catch(()=>{}):audio.pause();
  audio.onplay=()=>playBtn.textContent="❚❚";audio.onpause=()=>playBtn.textContent="▶";
  const owner=p.authorId===me;
  listenState=owner?null:{post:p.id,max:0,sent:-1,created:false,dur:0};
  const tick=()=>{const d=audio.duration||0,c=audio.currentTime||0;
    prog.style.width=(d?c/d*100:0)+"%";ptime.textContent=mmss(c)+(d?" / "+mmss(d):"");if(markT)markT.textContent=mmss(c);
    if(listenState&&d){listenState.dur=d;if(c>listenState.max&&c<=listenState.max+3)listenState.max=c;if(listenState.max-listenState.sent>=8)sendListen()}};
  audio.ontimeupdate=tick;audio.onended=()=>{if(listenState){listenState.max=audio.duration;sendListen()}};
  audio.onpause=()=>{playBtn.textContent="▶";if(listenState)sendListen()};
  audio.onloadedmetadata=()=>{positionDots();tick()};
  document.getElementById("wave").onclick=e=>{if(e.target.closest(".wdot"))return;const r=e.currentTarget.getBoundingClientRect();if(audio.duration)audio.currentTime=(e.clientX-r.left)/r.width*audio.duration};
  // waveform peaks
  try{
    let peaks=peaksCache.get(path);
    if(!peaks){const buf=await decodeBlob(await (await fetch(url)).blob());const ch=buf.getChannelData(0),N=80,step=Math.floor(ch.length/N);
      peaks=[...Array(N)].map((_,i)=>{let m=0;for(let j=i*step;j<(i+1)*step;j+=16){const v=Math.abs(ch[j]);if(v>m)m=v}return m});
      const mx=Math.max(...peaks,.01);peaks=peaks.map(v=>v/mx);peaksCache.set(path,peaks)}
    document.getElementById("wbars").innerHTML=peaks.map(v=>`<i style="height:${Math.max(8,Math.round(v*100))}%"></i>`).join("");
  }catch(e){}
}
function positionDots(){
  const audio=document.getElementById("songAudio");if(!audio||!audio.duration)return;
  document.querySelectorAll(".wdot").forEach(d=>{d.style.left=Math.min(100,+d.dataset.seek/audio.duration*100)+"%"});
}
async function sendListen(){
  const s=listenState;if(!s||!s.dur||s.max<=s.sent)return;const max=Math.round(s.max*100)/100;s.sent=max;
  if(!s.created){const r=await sb.from("duetto_listens").insert({post_id:s.post,user_id:me,max_sec:max,duration:Math.round(s.dur*100)/100});
    if(!r.error||r.error.code==="23505")s.created=true;if(!r.error)return}
  await sb.from("duetto_listens").update({max_sec:max}).eq("post_id",s.post).eq("user_id",me);
}
window.addEventListener("pagehide",()=>{try{sendListen()}catch(e){}});
function seekTo(sec){const a=document.getElementById("songAudio");if(!a)return;a.currentTime=+sec;a.play().catch(()=>{});document.getElementById("player")?.scrollIntoView({behavior:"smooth",block:"center"})}
function markSheet(){
  const a=document.getElementById("songAudio");const at=a?Math.round((a.currentTime||0)*100)/100:0;a?.pause();
  sheet(`<h3>📍 ${t("markTitle")} · ${mmss(at)}</h3>
  <form id="markForm"><textarea name="b" maxlength="300" required placeholder="${t("markPh")}" style="min-height:90px"></textarea>
  <button class="btn pri full" style="margin-top:12px">${t("comment")}</button></form>`);
  document.getElementById("markForm").onsubmit=async e=>{e.preventDefault();const body=new FormData(e.target).get("b").trim();if(!body)return;
    const {error}=await sb.from("duetto_marks").insert({post_id:detail.id,user_id:me,at_sec:at,body});if(error)return fail(error);
    closeSheet();pushFlush();await refreshDetail()};
}
async function submitReview(form){
  const f=new FormData(form);const change=f.get("change").trim(),best=f.get("best").trim();
  if(!CATS.some(c=>reviewDraft[c]))return toast(t("rateAtLeast"));
  if(change.length<3)return toast(t("changeShort"));
  const row={post_id:detail.id,user_id:me,change,best:best||null,updated_at:new Date().toISOString(),...Object.fromEntries(CATS.map(c=>[c,reviewDraft[c]||null]))};
  const mine=(detail.reviews||[]).find(r=>r.user_id===me);
  const {error}=mine?await sb.from("duetto_reviews").update(row).eq("id",mine.id):await sb.from("duetto_reviews").insert(row);
  if(error)return fail(error);toast(t("reviewSent"));if(!mine)pushFlush();await refreshDetail();
}

/* ======================= events ======================= */
document.addEventListener("click",async e=>{
  if(e.target.closest("audio,input,textarea,select,a"))return;
  const el=e.target.closest("button,[data-open],[data-user],[data-notif],[data-nav]");if(!el)return;
  const d=el.dataset;
  try{
  if(d.seek!==undefined&&d.seek!==""){seekTo(d.seek)}
  else if(d.markhere){if(requireName())markSheet()}
  else if(d.rv){const [c,v]=d.rv.split("|");reviewDraft[c]=reviewDraft[c]===+v?0:+v;
    el.parentElement.querySelectorAll(".star").forEach((s,i)=>s.classList.toggle("on",i<(reviewDraft[c]||0)))}
  else if(d.tab){view.tab=d.tab;render(true)}
  else if(d.nav){if(d.nav==="new"){if(!requireName())return;draft={type:"lyrics",split:50,genre:0,lang:lang,challenge:!!d.joinch}}closeSheet();go(d.nav)}
  else if(d.open){closeSheet();go("post",{postId:d.open})}
  else if(d.user){closeSheet();go("profile",{userId:d.user})}
  else if(d.notif){const [nid,pid]=d.notif.split("|");await sb.from("duetto_notifications").update({read:true}).eq("id",nid);if(pid)go("post",{postId:pid});else go("notifs")}
  else if(d.readall){await sb.from("duetto_notifications").update({read:true}).eq("read",false).eq("user_id",me);go("notifs")}
  else if(d.unlock){if(requireName())unlockSheet(d.unlock)}
  else if(d.dounlock){const {error}=await sb.from("duetto_unlocks").insert({post_id:d.dounlock,user_id:me});if(error&&error.code!=="23505")return fail(error);myUnlocks.add(d.dounlock);closeSheet();await refreshDetail()}
  else if(el.hasAttribute("data-close")){closeSheet()}
  else if(d.propose){if(requireName())proposeSheet(d.propose)}
  else if(d.vote){const x=detail.proposals.find(y=>y.id===d.vote);const has=x.votes.includes(me);
    const {error}=has?await sb.from("duetto_votes").delete().eq("proposal_id",x.id).eq("user_id",me):await sb.from("duetto_votes").insert({proposal_id:x.id,user_id:me});
    if(error)return fail(error);await refreshDetail()}
  else if(d.rate){const [xid,k]=d.rate.split("|");const x=detail.proposals.find(y=>y.id===xid);const r={...(x.ratings[me]||{l:0,m:0,h:0}),[k]:+d.v};
    const {error}=await sb.from("duetto_ratings").upsert({proposal_id:xid,user_id:me,...r},{onConflict:"proposal_id,user_id"});if(error)return fail(error);x.ratings[me]=r;render(true)}
  else if(d.choose){el.disabled=true;const {error}=await sb.from("duetto_agreements").insert({post_id:detail.id,proposal_id:d.choose});if(error){el.disabled=false;return fail(error)}toast(t("chosenToast"));pushFlush();await refreshDetail()}
  else if(d.signacct){el.disabled=true;const {error}=await sb.from("duetto_signatures").insert({agreement_id:d.signacct,user_id:me});if(error){el.disabled=false;return fail(error)}toast(t("signedToast"));pushFlush();await refreshDetail()}
  else if(d.wsign){signAgreementSheet(d.wsign)}
  else if(d.anchor){el.disabled=true;el.textContent=t("wWorking2");try{await callWalletFn({action:"anchor",agreement_id:d.anchor});toast(t("wAnchorDone"));pushFlush()}catch(err){fail(err)}await refreshDetail()}
  else if(d.link){linkSheet(false)}
  else if(d.restore){linkSheet(true)}
  else if(d.more){const [type,id,uid,name]=d.more.split("|");moreSheet(type,id,uid,name)}
  else if(d.report){const [type,id]=d.report.split("|");reportSheet(type,id)}
  else if(d.blockuser){const [uid]=d.blockuser.split("|");await toggleBlock(uid)}
  else if(d.adminhide){const [type,id,h]=d.adminhide.split("|");const {error}=await sb.rpc("duetto_admin_hide",{p_type:type,p_id:id,p_hidden:h==="1"});if(error)return fail(error);closeSheet();toast("✓");go(view.page,{})}
  else if(d.resolve){const [type,id]=d.resolve.split("|");const {error}=await sb.from("duetto_reports").update({resolved:true}).eq("target_type",type).eq("target_id",id);if(error)return fail(error);go("admin")}
  else if(d.winner){const [cid,xid]=d.winner.split("|");const {error}=await sb.rpc("duetto_admin_set_winner",{p_challenge:cid,p_proposal:xid});if(error)return fail(error);toast("🏆 ✓");await loadFeed();render(true)}
  else if(d.editprofile){editProfileSheet()}
  else if(d.push){enablePush()}
  else if(d.pdf){makePdf(d.pdf)}
  else if(d.chat){chatSheet(d.chat)}
  else if(d.tip){const [kind,id,name]=d.tip.split("|");if(requireName())tipSheet(kind,id,name)}
  else if(d.tipamt){const [kind,id,sym,amt]=d.tipamt.split("|");startPayment({kind:"tip",[kind==="post"?"post_id":"proposal_id"]:id,symbol:sym,amount:+amt})}
  else if(d.boost){boostSheet(d.boost)}
  else if(d.boostpay){startPayment({kind:"boost",post_id:d.boostpay})}
  else if(d.type){draft.type=d.type;draft.fileName=null;draft.file=null;render()}
  else if(el.id==="userBtn"){if(meName)go("profile",{userId:me});else nameSheet(true)}
  else if(el.id==="bellBtn"){go("notifs")}
  else if(el.id==="langBtn"){lang=lang==="es"?"en":"es";save("duetto_lang",lang);render(true)}
  }catch(err){fail(err)}
});
let qTimer=null;
document.addEventListener("input",e=>{
  if(e.target.id==="q"){clearTimeout(qTimer);const v=e.target.value;qTimer=setTimeout(()=>{view.q=v;const m=document.getElementById("main");m.innerHTML=renderExplore();hydrateAudio();hydrateImages(m)},200);return}
  if(e.target.id==="splitIn"){draft.split=+e.target.value;document.getElementById("sMe").textContent=draft.split+"%";document.getElementById("sOt").textContent=(100-draft.split)+"%"}
  const f=e.target.form;if(f&&f.id==="newForm"&&e.target.name){draft[e.target.name]=e.target.type==="checkbox"?e.target.checked:e.target.value}
});
document.addEventListener("change",e=>{
  if(e.target.id==="fGenre"){view.genre=e.target.value;render(true)}
  if(e.target.id==="fLang"){view.lang=e.target.value;render(true)}
  if(e.target.id==="fileIn"){const f=e.target.files[0];if(f){draft.file=f;draft.fileName=f.name;document.getElementById("fileBox").firstChild.textContent="🎵 "+f.name}}
});
document.addEventListener("submit",async e=>{
  if(e.target.id==="newForm"){
    e.preventDefault();const f=new FormData(e.target);
    const isS=draft.type==="song";
    const title=f.get("title").trim(),isL=draft.type==="lyrics",text=(f.get("text")||"").trim();
    if(!title||(isL&&!text)||(!isL&&!draft.file))return toast(t("needFields"));
    const btn=document.getElementById("postBtn");btn.disabled=true;btn.textContent=t("uploading");
    try{
      let audio_path=null;if(!isL)audio_path=await uploadFile(draft.file);
      const hash=await sha(isL?text:draft.file);
      const preview=(isL||isS)&&text?text.split("\n").filter(Boolean).slice(0,2).join("\n").slice(0,300):null;
      const ch=f.get("challenge")?activeChallenge():null;
      const {data,error}=await sb.from("duetto_posts").insert({type:draft.type,title,genre:T[lang].genres[+f.get("genre")],lang:f.get("lang")||"es",mood:f.get("mood").trim()||null,preview,audio_path,split:draft.split,hash,author_id:me,challenge_id:ch?ch.id:null}).select("id").single();
      if(error)throw error;
      if(text&&(isL||isS)){const r=await sb.from("duetto_post_content").insert({post_id:data.id,text});if(r.error)throw r.error}
      toast(t("posted"));draft={type:"lyrics",split:50,genre:0,lang:lang,challenge:false};go("post",{postId:data.id});
    }catch(err){btn.disabled=false;btn.textContent=t("post");fail(err)}
  } else if(e.target.id==="revForm"){
    e.preventDefault();if(requireName())submitReview(e.target);
  } else if(e.target.dataset.comment){
    e.preventDefault();const c=new FormData(e.target).get("c").trim();if(!c)return;if(!requireName())return;
    const {error}=await sb.from("duetto_comments").insert({proposal_id:e.target.dataset.comment,body:c,user_id:me});if(error)return fail(error);
    pushFlush();await refreshDetail();
  } else if(e.target.id==="chForm"){
    e.preventDefault();const f=new FormData(e.target);
    const {error}=await sb.from("duetto_challenges").insert({title_es:f.get("title_es").trim(),title_en:f.get("title_en").trim()||null,body_es:f.get("body_es").trim()||null,body_en:f.get("body_en").trim()||null,
      tag:f.get("tag").trim().toLowerCase(),prize:f.get("prize").trim()||null,ends_at:new Date(f.get("ends")+"T23:59:00").toISOString()});
    if(error)return fail(error);toast("🏆 ✓");await loadFeed();go("admin");
  } else if(e.target.id==="cfgForm"){
    e.preventDefault();const f=new FormData(e.target);
    const r1=await sb.from("duetto_config").update({value:{symbol:f.get("symbol"),amount:+f.get("amount"),hours:+f.get("hours")}}).eq("key","boost");
    const r2=await sb.from("duetto_config").update({value:f.get("treasury").trim()}).eq("key","treasury_wallet");
    if(r1.error||r2.error)return fail(r1.error||r2.error);await loadMe();toast(t("saved"));
  }
});
function fromHash(){
  const h=location.hash.slice(1);
  if(["explore","new","mine","admin"].includes(h))view.page=h;
  else if(h==="avisos")view.page="notifs";
  else if(h==="reto")view.page="challenge";
  else if(h.startsWith("post-")){view.page="post";view.postId=h.slice(5)}
  else if(h.startsWith("perfil-")){view.page="profile";view.userId=h.slice(7)}
}
window.addEventListener("hashchange",()=>{const before=hashFor();fromHash();if(hashFor()!==before)go(view.page)});
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&me)refreshUnread()});
setInterval(()=>{if(me&&!document.hidden)refreshUnread()},60000);
const _render=render;
render=function(k){_render(k);if(view.page==="challenge")fillWinner();if(view.page==="post"&&detail?.type==="song")setupSongPlayer()};

/* ======================= boot ======================= */
(async()=>{
  render();
  try{
    let {data:{session}}=await sb.auth.getSession();
    if(!session){const {data,error}=await sb.auth.signInAnonymously();if(error)throw error;session=data.session}
    me=session.user.id;
    await loadMe();
    fromHash();
    if(view.page==="new"&&!meName)view.page="explore";
    await go(view.page);
    if(!meName)nameSheet(true);
    pushFlush();
  }catch(err){loading=false;document.getElementById("main").innerHTML=`<div class="empty">⚠️ ${t("authErr")}<br><br><span class="hash">${esc(err?.message||err)}</span></div>`}
})();
try{if('serviceWorker' in navigator&&window.top===window.self&&location.protocol==='https:')navigator.serviceWorker.register('sw.js')}catch(e){}
