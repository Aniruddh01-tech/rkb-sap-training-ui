'use client';

import React from 'react';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Paper,
  Divider,
  Switch,
  IconButton,
  List,      
  ListItem,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'courses', label: 'Courses' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
];

const courses = [
  {
    title: 'SAP FICO',
    description:
      'Master financial accounting and controlling with SAP FICO. Learn about general ledger, accounts payable/receivable, asset accounting, and integration with other SAP modules.',
  },
  {
    title: 'SAP MM',
    description:
      'Understand materials management processes including procurement, inventory management, invoice verification, and integration with logistics and supply chain.',
  },
  {
    title: 'SAP SD',
    description:
      'Gain expertise in sales and distribution. Cover order-to-cash processes, pricing, billing, shipping, and customer relationship management.',
  },
  {
    title: 'SAP ABAP',
    description:
      'Learn the fundamentals of SAP’s programming language. Develop custom reports, interfaces, enhancements, and forms to extend SAP functionality.',
  },
];

export default function Home() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#1976d2',
          },
        },
      }),
    [mode]
  );

  const handleThemeToggle = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Navbar */}
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo on the left */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/NewLogo.jpg"
              alt="RKB SAP Logo"
              width={48}
              height={48}
              style={{ marginRight: 16, borderRadius: '50%' }}
              priority
            />
            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 2 }}>
              RKB SAP
            </Typography>
          </Box>
          {/* Navigation buttons and theme switch */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                color="primary"
                href={`#${section.id}`}
                sx={{ textTransform: 'none', marginRight: 2, fontWeight: 600 }}
              >
                {section.label}
              </Button>
            ))}
            <IconButton onClick={handleThemeToggle} color="inherit" sx={{ ml: 1 }}>
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Switch checked={mode === 'dark'} onChange={handleThemeToggle} color="primary" />
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 6 }}>
        {/* Home Section */}
        <Box id="home" sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 800 }}>
            Welcome to RKB SAP Training
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
            Empowering your SAP career with expert-led courses and hands-on learning.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Join our community of learners and professionals to master SAP modules and boost your career prospects. Our courses are designed for both beginners and experienced users.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#courses"
            sx={{ borderRadius: 8, px: 4, py: 1.5, fontWeight: 700 }}
          >
            Explore Courses
          </Button>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Courses Section */}
        <Box id="courses" sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, textAlign: 'center' }}>
            Our Courses
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Choose from our in-demand SAP modules, each designed with practical examples and real-world scenarios.
          </Typography>
          <Grid container spacing={4}>
            {courses.map((course) => (
              <Grid item xs={12} sm={6} key={course.title}>
                <Card elevation={3} sx={{ borderRadius: 3, height: '100%' }}>
                  <CardHeader
                    title={course.title}
                    titleTypographyProps={{ variant: 'h6', fontWeight: 700 }}
                    sx={{ background: theme.palette.mode === 'dark' ? '#222' : '#f5f5f5', textAlign: 'center' }}
                  />
                  <CardContent>
                    <Typography variant="body1" color="text.secondary">
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* About Us Section */}
        <Box id="about" sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            About Us
          </Typography>
          <Typography variant="body1"  sx={{ mb: 2 }}>
            RKB SAP Training is dedicated to providing high-quality SAP education. Our team consists of certified SAP professionals with years of industry and teaching experience.
          </Typography>
          <Typography variant="body1"  sx={{ mb: 2 }}>
            We offer:
          </Typography>
          <List sx={{ mb: 2, ml: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <FiberManualRecordIcon sx={{ fontSize: 10, mr: 1, color: 'primary.main' }} />
              <Typography variant="body1">
                Comprehensive, up-to-date course content
              </Typography>
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <FiberManualRecordIcon sx={{ fontSize: 10, mr: 1, color: 'primary.main' }} />
              <Typography variant="body1">
                Hands-on labs and real-world projects
              </Typography>
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <FiberManualRecordIcon sx={{ fontSize: 10, mr: 1, color: 'primary.main' }} />
              <Typography variant="body1">
                Flexible learning schedules
              </Typography>
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <FiberManualRecordIcon sx={{ fontSize: 10, mr: 1, color: 'primary.main' }} />
              <Typography variant="body1">
                Career guidance and interview preparation
              </Typography>
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <FiberManualRecordIcon sx={{ fontSize: 10, mr: 1, color: 'primary.main' }} />
              <Typography variant="body1">
                Community support and networking opportunities
              </Typography>
            </ListItem>
          </List>
          <Typography variant="body1" color="text.primary">
            Whether you are a student, working professional, or business owner, our courses are tailored to help you succeed in the SAP ecosystem.
          </Typography>
        </Box>
        <Divider sx={{ mb: 6 }} />

        {/* Contact Section */}
          <Box id="contact" sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Contact
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Reach out to us using the details below. We look forward to hearing from you!
          </Typography>
          <Paper elevation={2} sx={{ p: 3, maxWidth: 450, mx: 'auto', borderRadius: 3 }}>
            <List>
              <ListItem>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, minWidth: 100 }}>
                  Address:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  123 Main Street, Bengaluru, Karnataka, India
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, minWidth: 100 }}>
                  Mobile:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  +91 98765 43210
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, minWidth: 100 }}>
                  Email:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  info@rkbsaptraining.com
                </Typography>
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: theme.palette.mode === 'dark' ? '#222' : '#f5f5f5', py: 3, textAlign: 'center', mt: 6 }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} RKB SAP Training. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}