import mysql.connector
from mysql.connector import Error


# Database connection configuration
db_config = {
    'host': '127.0.0.1',  # or your MySQL server host
    'user': 'root',  # your MySQL username
    'password': 'admin',  # your MySQL password
    'database': 'managementdb'  # replace with your actual database name
}
# Sql connection function
def get_db_connection():
    try:
        connection = mysql.connector.connect(**db_config)
        if connection.is_connected():
            return connection
    except Error as e:
        print(f"Error connecting to database: {e}")
        return None
