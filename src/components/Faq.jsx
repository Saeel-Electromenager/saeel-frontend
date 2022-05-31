import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        style={{ marginBottom: '20px' }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Qui sommes nous</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography width={'100%'}>
            chez Saeel, notre mission est de vous offrir des produits de marque
            garantie livrer en temps record, qui prouvent que vous êtes
            importants pour nous. Non seulement nos produits electromenagers
            sont au top de la tendance, mais ils sont aussi de la meilleure
            qualité. Nous avons démarré en tant que petite entreprise à Bejaia
            en 2022 et nous n’avons cessé depuis de fournir à nos clients des
            produits qui les rendent heureux, à des prix qui les rendent encore
            plus heureux. Nos clients restent au top de nos priorités et nous
            travaillons dur pour développer avec eux une relation sur le long
            terme, basée sur la confiance et l’authenticité.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        style={{ marginBottom: '20px' }}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Protection de l'achteur</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography width={'100%'}>
            Garantie de remboursement :<br />
            <br />
            • Si l'article n'est pas livré durant la période de protection de
            l'acheteur
            <br />
            <br />• Si l'article n'est pas comme la description
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        style={{ marginBottom: '20px' }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Signaler une infraction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Contactez le :<br />
            0541 49 43 61 <br />
            Ou le :<br />
            00 213 541 49 43 61
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        style={{ marginBottom: '20px' }}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Rapelle des produits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography width={'100%'}>
            Le temps d'emballage correspond au nombre de jours ouvrables qu'il
            faudra a saeel pour procéder à l'envoi proprement dit de votre
            article après réception de la commande. Les "jours ouvrables"
            correspondent aux jours de semaine normaux. Naturellement, les
            vendredi, les samedi et les jours fériés n’en font pas partie.
            Assurez-vous d’effectuer votre paiement auprès du vendeur dès que
            possible pour recevoir votre article dans les plus brefs délais.{' '}
            <br />
            <br />
            Si le vendeur ne procède pas à l'envoi dans la limite du temps
            d'emballage, vous serez remboursés. Droits légaux pour les
            consommateurs, le vendeur est tenu de respecter les autres
            obligations légales pertinentes (garantie, retour, etc.) qui peuvent
            être applicables en fonction de l'adresse de l'acheteur. <br />
            <br />
            Par exemple, dans la plupart des pays de l'Union européenne,
            l'acheteur a généralement droit à la garantie légale de conformité
            dans les 2 ans suivants l'achat et droit gratuit à retourner
            l'article dans les 14 jours suivant la réception (veuillez noter que
            en cas de retour, l'acheteur doit s'acquitter des frais de port du
            retour des
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
        style={{ marginBottom: '20px' }}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Données personnelles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography width={'100%'}>
            Les données traitées par Saell sont principalement collectées via
            les formulaires accessibles sur notre site web, ou lors de la
            création du compte par un visiteur du site internet , exception
            faite de certaines données relatives à la connexion des visiteurs
            (adresses IP) qui sont enregistrées automatiquement par nos systèmes
            dans les logs serveurs et par les systèmes de la société.
            <br /> <br />
            Saeel s’engage à respecter le principe de minimisation des données
            personnelles posé à l’article 5.1 du RGPD, qui consiste à ne
            collecter que les données strictement nécessaires aux traitements et
            exactes.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
        style={{ marginBottom: '20px' }}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Utilisations des cookies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography width={'100%'}>
            les Cookies que nous utilisons relèvent uniquement de l’analyse,
            c’est-à-dire des Cookies utiles à l’élaboration de statistiques pour
            Google Analytics et autres outils d’analyse SEO :<br />
            <br /> Pour l’élaboration des statistiques Analytics, les cookies
            relèvent anonymement des informations sur vos moyens d’accès à notre
            site comme l’adresse IP, le type d’appareil utilisé (s’il s’agit
            d’un mobile ou un ordinateur), le système d’exploitation (Windows
            10, Android, etc…), le type et la version du navigateur utilisé
            ainsi que leurs extensions utilisées.
            <br />
            <br /> Egalement dans le cadre de statistiques, les informations
            relatives à la navigation sont utilisées par les cookies comme le
            parcours de navigation sur Webprospection, les termes recherchés,
            pages ou contenu consultés, le temps que vous êtes resté sur une
            page.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Les garanties</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography width={'100%'}>
            Si le produit acheté ne correspond pas à la description ou s'il
            n'est pas arrivé à la date prévue, nous garantissons votre
            remboursement. Vous recevrez l'argent dans les 15 jours suivant la
            finalisation du litige. Cette garantie est complémentaire et ne
            limite pas vos droits de consommateur aux garanties locales
            conformément à la législation et à la réglementation en vigueur dans
            votre ville de résidence.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
