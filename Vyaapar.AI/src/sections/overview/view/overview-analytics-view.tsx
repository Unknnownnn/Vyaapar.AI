import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _tasks, _posts, _timeline } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Vyaapar.AI
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Total Portfolio Amount"
            percent={30}
            total={950000} // Increased total amount invested
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [60, 10, 40, 70, 90, 85, 80, 15], // Updated chart values
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Number Of Companies Invested In"
            percent={-0.1}
            total={20} // Increased number of companies invested in
            color="secondary"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-users.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [60, 50, 45, 65, 75, 32, 28, 58], // Updated chart values
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="No. of Diversified Sectors Invested In"
            percent={2.8}
            total={6} // Increased number of diversified sectors
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-buy.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [45, 70, 55, 30, 75, 80, 10, 70], // Updated chart values
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="No. of Profitable Companies"
            percent={3.6}
            total={270} // Increased number of profitable companies
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [70, 40, 30, 60, 50, 45, 68, 78], // Updated chart values
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Top Profitable Companies"
            chart={{
              series: [
                { label: 'Allen', value: 4000 }, // Updated profit values
                { label: 'Big Basket', value: 3000 },
                { label: '1Bridge', value: 2000 },
                { label: 'BookMyShow', value: 800 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits
            title="Sectors Invested In the past three years"
            subheader="(+24%) than last year"
            chart={{
              categories: ['EdTech', 'Consumer Tech', 'E-Commerce', 'HealthCare', 'BlockChain', 'Gaming', 'Fintech', 'Agritech', 'Food & Beverages'],
              series: [
                { name: 'Profit making', data: [25, 40, 70, 50, 80, 70, 40, 20, 60] }, // Updated values
                { name: 'Loss Making', data: [75, 60, 30, 70, 20, 30, 60, 80, 40] }, // Updated values
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsConversionRates
            title="Valuation Growth"
            chart={{
              categories: ['Allen', 'BookMyShow', 'Alti Green', '1Bridge', 'FreshWorks'],
              series: [
                { name: '2022', data: [54, 60, 50, 70, 30] }, // Updated data
                { name: '2023', data: [60, 45, 40, 60, 25] }, // Updated data
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentSubject
            title="Sector wise map"
            chart={{
              categories: ['EdTech', 'Consumer Tech', 'E-Commerce', 'HealthCare', 'BlockChain', 'Gaming', 'Fintech', 'Agritech', 'Food & Beverages'],
              series: [
                { name: 'Funding', data: [90, 60, 50, 50, 120, 30,89 ,110, 23] }, // Updated values
                { name: 'Revenue', data: [30, 40, 50, 90, 30, 90,120, 70, 56] }, // Updated values
                { name: 'Sentiment', data: [50, 80, 75, 25, 50, 15,80, 70, 67] }, // Updated values
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsNews title="News" list={_posts.slice(0, 5)} />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AnalyticsOrderTimeline title="Order timeline" list={_timeline} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AnalyticsTrafficBySite
            title="Traffic by site"
            list={[
              { value: 'facebook', label: 'Facebook', total: 350000 },
              { value: 'google', label: 'Google', total: 360000 },
              { value: 'linkedin', label: 'Linkedin', total: 410000 },
              { value: 'twitter', label: 'Twitter', total: 450000 },
            ]}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={8}>
          <AnalyticsTasks title="Tasks" list={_tasks} />
        </Grid> */}
      </Grid>
    </DashboardContent>
  );
}
