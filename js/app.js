// app.js - supabase client, form handling and counters
const supabaseUrl='https://faqfkiwkvnsurekmjerv.supabase.co';
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcWZraXdrdm5zdXJla21qZXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwODk5ODgsImV4cCI6MjEwNTY2NTk4OH0.dzTQbvM9vntFCmG5egS29OJV_Alt0GQayO7fjp4MyFg";
const supabaseClient=window.supabase.createClient(supabaseUrl, supabaseKey);

const form=document.getElementById("sinaduraForm");
const mezua=document.getElementById("mezua");
const contadorSinadurak=document.getElementById("contadorSinadurak");
const contadorIkaslea=document.getElementById("contadorIkaslea");
const contadorLangilea=document.getElementById("contadorLangilea");
const egoeraAukerak=document.querySelectorAll('input[name="egoera"]');

egoeraAukerak.forEach((aukera) => {
    aukera.addEventListener("change", () => {
        if(aukera.checked) {
            egoeraAukerak.forEach((besteAukera) => {
                if(besteAukera!==aukera) {
                    besteAukera.checked=false;
                }
            });
        }
    });
});

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const izen_abizenak=
        document.getElementById("izen_abizenak").value;

    const emaila=
        document.getElementById("emaila").value;

    const hautatutakoEgoera=
        document.querySelector('input[name="egoera"]:checked');

    const t = translations[localStorage.getItem('preferredLang') || 'eus'];

    if(!hautatutakoEgoera) {
        mezua.style.color="red";
        mezua.innerText=t.message_choose;
        return;
    }

    const egoera=hautatutakoEgoera.value;

    const {error}=await supabaseClient
        .from("sinadurak")
        .insert([
            {
                izen_abizenak,
                emaila,
                egoera
            }
        ]);

    if(error) {

        mezua.style.color="red";
        mezua.innerText=
            t.error_prefix+" "+error.message;

        return;
    }

    mezua.style.color="green";
    mezua.innerText=
        t.message_saved;

    form.reset();

    kargatuSinadurak();

});

async function kargatuSinadurak() {

    const {count, error}=await supabaseClient
        .from("sinadurak")
        .select("*", {count: "exact", head: true});

    const lang = localStorage.getItem('preferredLang') || 'eus';
    const t = translations[lang];

    if(!error&&typeof count==="number") {
        contadorSinadurak.textContent=`${t.total_label}: ${count}`;
    }

    const {count: countIkaslea, error: errorIkaslea}=await supabaseClient
        .from("sinadurak")
        .select("*", {count: "exact", head: true})
        .eq("egoera", "Ikaslea");

    if(!errorIkaslea&&typeof countIkaslea==="number") {
        contadorIkaslea.textContent=`${t.ikaslea_label}: ${countIkaslea}`;
    }

    const {count: countLangilea, error: errorLangilea}=await supabaseClient
        .from("sinadurak")
        .select("*", {count: "exact", head: true})
        .eq("egoera", "Langilea");

    if(!errorLangilea&&typeof countLangilea==="number") {
        contadorLangilea.textContent=`${t.langilea_label}: ${countLangilea}`;
    }

}

// Inicializar contadores al cargar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => kargatuSinadurak());
} else {
    kargatuSinadurak();
}
