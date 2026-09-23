// i18n.js - manage translations and language switching
const translations = {
    eus: {
        title: 'ISRAELEKIN HARREMANAK ETEN\nCAF EHU-TIK KANPO',
        p1: `CAF trengintza enpresa euskaldunak, lurralde okupatuan legez kanpoko koloniak lotzen dituen tren sarea eraikitzen lagundu du. Bertako apartheid eta okupazio egoeran sakonduz negozia eginez. Horregatik diogu EHU gisako instituzio publiko batek berarekin harremanak moztu beharko lituzkeela. Euskal Herritik Israelen aurkako boikot kanpainen erdigunea hartu du enpresa honek azken garaian eta garrantzitsua da unibertsitatetik guk honi ekarpena egitea, boikota guztiok batera gauzatzean bilakatzen baita efektibo. Francesca Albanese NBEko Palestinako lurralde okupatuetako giza eskubideen egoerari buruzko Espazio Kontalari Bereziaren txostenean, CAF Palestinako apartheidaren eta genozidioaren onuradun diren enpresen artean aipatzen da.`,
        p2: `Orain dela lau urte sinatu zen CAFek Bizkaiko Campusean enpresa-gela bat izateko kontratua eta aurten hau bertan behera uzteko eskaria egin ezean, automatikoki berrituko da. Duela urte batzuk lortu genuen Gipuzkoako Campusean halako gela berri bat ez irekitzea, eta horrek harreman zahar hau etetea posible dela erakusten digu. Bada garaia enpresen interesak erdigunetik kendu eta boikotari bide egiteko. Honen gaineko erantzukizun zuzena EHUrena da eta horregatik exijitzen diogu CAFekin dituen harreman guztiak bertan behera uztea, baita genozidioan parte hartzen duten bestelako entitate eta enpresekin ere.`,
        p3: `Unibertsitate komunitatearen esku dago presioa egin eta harremanak etetea. <br><strong>CAF EHUtik Kanpo! EHU harreman oro eten!</strong>`,
        label_name: 'Izen-abizenak *',
        label_id: 'NAN *',
        label_kolektiboa: 'EHU kolektiboa *',
        submit: 'SINATU',
        info_box: `Sinadura honekin <strong>EHUko Gobernu Kontseiluari</strong> CAFek Bilboko Ingeniaritza eskolan duen enpresa gelaren akordio ez berritzea eskatzen diot.`,
        message_choose: 'Hautatu egoera bat',
        message_saved: 'Sinadura behar bezala erregistratu da',
        error_prefix: 'Errorea:',
        total_label: 'Guztira',
        ikaslea_label: 'Ikasleak',
        langilea_label: 'Langileak',
        privacy_title: 'Jasotako sinadurak',
        privacy_box: `<p>Jasotako sinadurak <strong>EHU Palestinako kideek</strong> gordeko dituzte, ondoren <strong>EHUko Errektoretzari</strong> aurkezteko helburuarekin. Bildutako datu pertsonalak ez dira beste inolako helburutarako erabiliko, ezta hirugarren pertsonei edo erakundeei lagako ere.</p>
        <p>Sinadura ematean, zure datu pertsonalak bildu eta tratatzeko baimena ematen duzu, betiere ekimen honen kudeaketarako eta EHU Palestinako kideek soilik erabiltzeko.</p>
        <p>Bildutako datu guztiak hilabeteko epean ezabatuko dira, sinadura-bilketaren helburua bete ondoren.</p>`,
    },
    es: {
        title: 'CESE DE RELACIONES CON ISRAEL\nCAF FUERA DE LA EHU',
        p1: `La empresa ferroviaria vasca CAF ha colaborado en la construcción de la red ferroviaria que une las colonias ilegales en territorio ocupado, profundizando y haciendo negocio con el estado de apartheid y ocupación de Palestina. Por eso decimos que una institución pública como la EHU debería cortar relaciones con ella. Esta empresa es el centro de las campañas de boicot contra Israel impulsado desde el País Vasco y es importante que desde la universidad hagamos nuestra aportación, ya que el boicot se convierte en efectivo cuando todos juntos lo hacemos. En el informe de la Relatora Especial sobre la situación de los derechos humanos en los territorios palestinos ocupados de la ONU, Francesca Albanese, se cita a CAF entre las empresas beneficiadas por el apartheid palestino y el genocidio.`,
        p2: `Hace cuatro años se firmó el contrato para que CAF tuviera un aula de empresa en el Campus de Bizkaia y si este año no se solicita su rescisión, se renovará automáticamente. Hace unos años conseguimos que en el Campus de Gipuzkoa no se abriera un aula de estas características, lo que nos demuestra que es posible romper esta relación. Ya es hora de que los intereses de las empresas se quiten del centro y den paso al boicot. La responsabilidad directa sobre esto es de la EHU y por eso le exigimos que abandone todas sus relaciones con CAF, así como con otras entidades y empresas implicadas en el genocidio.`,
        p3: `Está en manos de la comunidad universitaria presionar y romper relaciones. <br><strong>CAF fuera de la EHU! EHU, HARREMAN ORO ETEN!</strong>`,
        label_name: 'Nombre y apellidos *',
        label_id: 'DNI *',
        label_kolektiboa: 'Colectivo EHU *',
        submit: 'FIRMAR',
        info_box: `Con esta firma pido al Consejo de Gobierno de la EHU que no renueve el acuerdo del aula de empresa de CAF en la escuela de Ingeniería de Bilbao.`,
        message_choose: 'Elige un colectivo',
        message_saved: 'Firma registrada correctamente',
        error_prefix: 'Error:',
        total_label: 'Total',
        ikaslea_label: 'Estudiantes',
        langilea_label: 'Trabajadores',
        privacy_title: 'Firmas recogidas',
        privacy_box: `<p>Las firmas recibidas serán guardadas por miembros de <strong>EHU Palestina</strong> con el objetivo de presentarlas posteriormente al <strong>Rectorado de la EHU</strong>. Los datos personales recabados no se utilizarán para ningún otro fin ni se cederán a terceras personas o entidades.</p>
        <p>En la entrega de la firma, usted autoriza la recogida y tratamiento de sus datos personales, siempre para la gestión de esta iniciativa y su uso exclusivo por miembros de EHU Palestina.</p>
        <p>Todos los datos recabados serán borrados en el plazo de un mes, una vez cumplido el objetivo de recogida de firmas.</p>`,
    }
};

function setLanguage(lang) {
    const t = translations[lang] || translations.eus;
    const h1 = document.querySelector('h1');
    if (h1) h1.innerText = t.title;
    const ps = document.querySelectorAll('body > p');
    if (ps[0]) ps[0].innerHTML = t.p1;
    if (ps[1]) ps[1].innerHTML = t.p2;
    if (ps[2]) ps[2].innerHTML = t.p3;
    const infoBoxEl = document.querySelector('.info-box');
    if (infoBoxEl && t.info_box) infoBoxEl.innerHTML = t.info_box;
    const labels = document.querySelectorAll('form label');
    if (labels[0]) labels[0].innerText = t.label_name;
    if (labels[1]) labels[1].innerText = t.label_id;
    if (labels[2]) labels[2].innerText = t.label_kolektiboa;
    // Update egoera option labels (keep the input elements)
    const egoLabels = document.querySelectorAll('.egoera-aukerak label');
    if (egoLabels && egoLabels.length) {
        const texts = [t.ikaslea_label || translations.eus.ikaslea_label, t.langilea_label || translations.eus.langilea_label];
        egoLabels.forEach((lab, idx) => {
            const input = lab.querySelector('input');
            if (input) {
                lab.innerHTML = '';
                lab.appendChild(input);
                lab.appendChild(document.createTextNode(' ' + (texts[idx] || '')));
            }
        });
    }
    document.querySelector('button[type="submit"]').innerText = t.submit;
    const link = document.getElementById('langLink');
    if (link) link.innerText = lang === 'eus' ? 'ES' : 'EU';
    const privacyTitleEl = document.getElementById('privacyTitle');
    if (privacyTitleEl) privacyTitleEl.innerText = t.privacy_title;
    const privacyBoxEl = document.querySelector('.privacy-box');
    if (privacyBoxEl && t.privacy_box) privacyBoxEl.innerHTML = t.privacy_box;
    localStorage.setItem('preferredLang', lang);
}

// Inicializar
const preferred = localStorage.getItem('preferredLang') || 'eus';
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setLanguage(preferred));
} else {
    setLanguage(preferred);
}

const langLink = document.getElementById('langLink');
if (langLink) {
    langLink.addEventListener('click', (e) => {
        e.preventDefault();
        const current = localStorage.getItem('preferredLang') || 'eus';
        const next = current === 'eus' ? 'es' : 'eus';
        setLanguage(next);
    });
}
