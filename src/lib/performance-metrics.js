import { event } from './tracking';

function coreVitalReportHandler({ name, delta, id }) {
  console.log('event', name, delta, id);

  event({
    action: name,
    category: 'Web Vitals',
    // Google Analytics metrics must be integers, so the value is rounded.
    // For CLS the value is first multiplied by 1000 for greater precision
    // (note: increase the multiplier for greater precision if needed).
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    // The `id` value will be unique to the current page load. When sending
    // multiple values from the same page (e.g. for CLS), Google Analytics can
    // compute a total by grouping on this ID (note: requires `eventLabel` to
    // be a dimension in your report).
    label: id,
    // Use a non-interaction event to avoid affecting bounce rate.
    non_interaction: true,
  });
}

export async function setUpCoreVitalsTracking() {
  const { getCLS, getFID, getLCP } = await import('web-vitals');

  getCLS(coreVitalReportHandler);
  getFID(coreVitalReportHandler);
  getLCP(coreVitalReportHandler);
}
