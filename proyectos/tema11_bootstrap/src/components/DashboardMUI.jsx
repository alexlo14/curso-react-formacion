import { Box, Drawer, AppBar, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { MoveToInbox ,Mail, Settings, Person } from "@mui/icons-material";

const iconos = [<MoveToInbox />, <Person />, <Mail />, <Settings />]

export default function DashboardMUI() {
    return (
        <Box sx={{ display: "flex" }}>
            <AppBar position="fixed">
                <Toolbar sx={{ marginLeft: 30 }}>
                <Typography variant="h6" noWrap component="div">
                    MUI Dashboard
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                width: 240,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 240,
                    boxSizing: "border-box",
                },
                }}
                variant="persistent"
                anchor="left"
                open={true}
            >
                <Box sx={{ padding: 2 }}>
                    <img src="./public/logo_CGR.png" style={{ maxHeight: "50px" }}></img>
                    <Typography variant="h6">CGR SOTO DEL REAL</Typography>
                </Box>
                <Divider />
                <List>
                {["Inicio", "Contactos", "Enviar email", "Ajustes"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        {iconos[index]}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Drawer>
            <Box sx={{ padding: 2, marginTop: 8 }}>
                <Typography paragraph>
                    <p>Aquí viene todo el contenido de nuestro Dashboard</p>
                    <img src="./public/logo_CGR.png" style={{ maxHeight: "200px" }}></img>
                </Typography>
            </Box>
        </Box>
    );
}
