from sqlalchemy import create_engine, MetaData

# Replace with your actual database URL
DATABASE_URL = 'sqlite:///backend/µbiomy.db'

# Create an engine and connect to the database
engine = create_engine(DATABASE_URL)
metadata = MetaData()

# Reflect the database schema
metadata.reflect(bind=engine)

# Print the current state and schema of the database
for table in metadata.tables.values():
    print(f"Table: {table.name}")
    for column in table.columns:
        print(f"  Column: {column.name}, Type: {column.type}")
    
    # Print the data in the table
    with engine.connect() as connection:
        result = connection.execute(table.select())
        for row in result:
            print(dict(row))

# Close the connection
engine.dispose()